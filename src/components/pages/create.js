import React, { Component } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { AwsContext } from '../../core/context/AwsContext';
import Artist from './artist';
import Clock from '../components/Clock';
import Footer from '../components/footer';
import { SendToS3, withRouter } from '../../utils';
import * as backend from '../../smartContract/build/index.main.mjs';
import { createGlobalStyle } from 'styled-components';
import Loading from '../components/loading';
import {
  ARTISTS,
  AVATAR,
  EVENTINFO,
  Itemtype,
  Nftcategory,
  Nftcollectiontype,
  NFTS,
  Nftstatus,
  OWNER
} from '../../models';
import { DataStore } from 'aws-amplify';
import SmartError from '../components/error/SmartError';
const topStyle = {
  marginTop: '3rem!important',
  width: '100%'
};
const loadingH = {
  position: 'fixed',
  top: '70%',
  right: '45%'
};
const topStyleLoading = {
  marginTop: '3rem!important',
  width: '100%',
  opacity: '.2'
};
const artistRowStyle = {
  flexFlow: 'column wrap',
  justifyContent: 'flex-start',
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'row'
};
const GlobalStyles = createGlobalStyle`
@media only screen and (min-width: 1199px) {
  .col-md-6.mt-3{
    padding: 6rem;
  }
}
`;
const containerStyle = {
  position: 'relative',
  padding: '3rem'
};
class Createpage extends Component {
  static contextType = AwsContext;
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.ready = this.ready.bind(this);
    this.getParams = this.getParams.bind(this);
    this.notify = this.notify.bind(this);
    this.createNFT = this.createNFT.bind(this);
    this.deploy = this.deploy.bind(this);
    this.newArtist = this.newArtist.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.addArtist = this.addArtist.bind(this);
    this.state = {
      loading: false,
      files: [],
      image: null,
      saveImage: null,
      contractState: 'off',
      newNFT: false,
      event: {
        item_title: 'Title',
        item_price: 'Price',
        item_description: 'Description',
        item_royalties: 'Royalties',
        item_time: '12/31/2022',
        item_location: 'earth',
        item_tickets: '0',
        artists: []
      },
      contract: null,
      tab: 'Event',
      artists: [Artist]
    };
  }
  async sendToAWS() {
    try {
      // await SendToS3(
      //     this.state.IMAGES.location.
      //     img,
      //     "location"
      // )
      this.state.event.artists.forEach(async (e) => {
        await SendToS3(e.image, 'artist');
      });
      await SendToS3(this.state.saveImage, 'preview_image');
      return true;
    } catch (error) {
      console.log(error);
      this.context.setErrorState({
        state: true,
        error: error.message
      });
      return false;
    }
  }
  async createNFT() {
    const artists = [];
    this.state.event.artists.forEach(async (e) => {
      const art = new ARTISTS({
        name: e.name,
        image: new AVATAR({
          name: e.image.name,
          alternativeText: e.name,
          width: e.image.size,
          height: e.image.size,
          url: `https://sse11114-dev.s3.amazonaws.com/public/artist/${e.image.name}`
        })
      });
      artists.push(art);
    });
    const imageName = this.state.saveImage.name;
    return {
      title: this.state.event.item_title,
      status: Nftstatus.ON_AUCTION,
      item_type: Itemtype.SINGLE,
      collections: Nftcollectiontype.CARTOONISM,
      deadline: this.state.event.item_time,
      category: Nftcategory.ART,
      price: parseInt(this.state.event.item_price),
      bid: 1,
      max_bid: 20,
      likes: 1020,
      description: this.state.event.item_description,
      views: 1020,
      priceover: null,
      showcase: true,
      preview_image: new AVATAR({
        name: imageName,
        alternativeText: '',
        width: 720,
        height: 720,
        url: `https://sse11114-dev.s3.amazonaws.com/public/preview_image/${this.state.saveImage.name}`
      }),
      chain: 'ALGO',
      owner: new OWNER({
        author: this.context.user.user,
        banner: this.context.user.banner ? new AVATAR(this.context.user.banner) : null,
        avatar: this.context.user.photo ? new AVATAR(this.context.user.photo) : null,
        username: this.context.user.social
      }),
      bids: [],
      history: [],
      event: new EVENTINFO({
        contractAddress: this.state.CONTRACTADDRESS,
        tokenID: this.state.TOKENID,
        walletAddress: this.context.wallet.Account,
        location: this.state.event.item_location,
        tickets: parseInt(this.state.event.item_tickets),
        ticketSold: parseInt(this.state.TICKETSOLD),
        artists: artists
      })
    };
  }
  async deploy() {
    this.context.resetError();
    try {
      const res = await this.sendToAWS();
      if (!res) return;
      const price = this.context.stdlib.parseCurrency(parseInt(this.state.event.item_price));
      const tickets = parseInt(this.state.event.item_tickets);
      const eventName = this.state.event.item_title;
      const eventSymbol = eventName.slice(0, 3);
      const url = eventName;
      const metadata = eventName;
      const evenTime = 100;
      const reserved = 2;

      this.contract = this.context.wallet.Main.contract(backend);

      this.eventObject = {
        tickets,
        eventName,
        price,
        eventSymbol,
        url,
        metadata,
        evenTime,
        reserved
      };
      if (this.contract.p) this.contract.p.CREATOR(this);
    } catch (error) {
      console.log(error);
      this.context.setErrorState({
        state: true,
        error: error.message
      });
    }
  }

  //REACH CONTRACT
  async getParams() {
    this.setState({
      ...this.state,
      contractState: 'Creating NFT'
    });
    return this.eventObject;
  }
  async notify(ctx, tkn, sup, bal) {
    this.setState({
      ...this.state,
      contractState: 'NFT created successfully'
    });
    const stdlib = this.context.stdlib;
    const balance = stdlib.bigNumberToNumber(bal);
    const supply = stdlib.bigNumberToNumber(sup);
    try {
      await this.context.wallet.Main.tokenAccept(tkn);
    } catch (error) {
      console.log('TOKEN ACCEPT ERROR: ', error);
    }
    this.setState({
      ...this.state,
      TOKENID: JSON.stringify(tkn),
      CONTRACTADDRESS: JSON.stringify(ctx),
      TICKETSOLD: supply - balance
    });
  }
  async ready() {
    let nft;
    let cr;
    this.setState({
      ...this.state,
      contractState: 'Contract Is Ready'
    });
    try {
      nft = await this.createNFT();
      cr = await DataStore.save(new NFTS(nft));
    } catch (error) {
      console.log('ERROR: ', error);
    }
    if (nft && cr) {
      this.setState({
        ...this.state,
        loading: false,
        newNFT: true
      });
    }
  }
  addArtist() {
    this.setState({
      ...this.state,
      artists: [...this.state.artists, Artist]
    });
  }
  onChange(e) {
    var files = e.target.files;
    var filesArr = Array.prototype.slice.call(files);
    const i = e.target.files[0];
    const image = URL.createObjectURL(i);
    document.getElementById('file_name').style.display = 'none';
    this.setState({
      files: [...this.state.files, ...filesArr],
      image: image,
      saveImage: i
    });
  }
  newArtist(k, i) {
    return <Artist parent={this} key={i}></Artist>;
  }
  onInputChange(e) {
    const val = e.target.id;
    const event = { ...this.state.event };
    event[val] = e.target.value;
    this.setState({
      ...this.state,
      event
    });
  }
  componentDidMount() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  componentDidUpdate() {
    if (this.state.newNFT && this.context.user) {
      this.props.navigate(`/Author/${this.context.user.user}`);
    }
  }
  render() {
    return (
      <div>
        <GlobalStyles />
        {this.state.loading && (
          <>
            <Loading></Loading>
            <div className="spacer-10"></div>
            <h5 style={loadingH}>{this.state.contractState}</h5>
          </>
        )}
        {/* {
        <section className='jumbotron breadcumb no-bg'>
          <div className='mainbreadcumb'>
            <div className='container'>
              <div className='row m-10-hor'>
                <div className='col-12'>
                  <h1 className='text-center'>Create</h1>
                </div>
              </div>
            </div>
          </div>
        </section> } */}
        <div className="col-md-6 mt-3" style={this.state.loading ? topStyleLoading : topStyle}>
          {/* <h3>Create</h3> */}
          <div id="tabs2">
            <Tabs
              fill
              defaultActiveKey="Event"
              activeKey={this.state.tab}
              onSelect={(k) => {
                this.setState({
                  ...this.state,
                  tab: k
                });
              }}
            >
              {this.context && this.context.errorState.state && (
                <SmartError error={this.context.errorState.error} />
              )}
              <Tab eventKey="Event" title="Event">
                <section className="container" style={containerStyle}>
                  <div className="row">
                    <div className="col-lg-7 offset-lg-1 mb-5">
                      <form id="form-create-item" className="form-border" action="#">
                        <div className="field-set">
                          <h5>Upload file</h5>
                          <div className="d-create-file">
                            <p id="file_name">PNG, JPG, GIF, WEBP or MP4. Max 200mb.</p>
                            {this.state.files.map((x) => (
                              <p key="{index}">{x.name}</p>
                            ))}
                            <div className="browse">
                              <input
                                type="button"
                                id="get_file"
                                className="btn-main"
                                value="Browse"
                              />
                              <input
                                required
                                id="upload_file"
                                accept="image/png, image/jpeg"
                                type="file"
                                multiple
                                onChange={this.onChange}
                              />
                            </div>
                          </div>
                          <div className="spacer-single"></div>
                          <h5>Title</h5>
                          <input
                            type="text"
                            name="item_title"
                            id="item_title"
                            className="form-control"
                            placeholder="e.g. 'Crypto Funk"
                            ref={this.title}
                            onChange={this.onInputChange}
                          />
                          <div className="spacer-10"></div>
                          <h5>Description</h5>
                          <textarea
                            data-autoresize
                            name="item_description"
                            id="item_description"
                            className="form-control"
                            placeholder="e.g. 'This is very limited item'"
                            onChange={this.onInputChange}
                          ></textarea>
                          <div className="spacer-10"></div>
                        </div>
                      </form>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-xs-12">
                      <h5>Preview item</h5>
                      <div className="nft__item m-0">
                        <div className="de_countdown">
                          <Clock deadline={this.state.event.item_time} />
                        </div>
                        <div className="author_list_pp">
                          {this.context.user && (
                            <span>
                              <img className="lazy" src={this.context.user.photo.url} alt="" />
                              <i className="fa fa-check"></i>
                            </span>
                          )}
                        </div>
                        <div className="nft__item_wrap">
                          <span>
                            <img
                              src={
                                this.state.image ? this.state.image : './img/placeholder/ticket.png'
                              }
                              id="get_file_2"
                              className="lazy nft__item_preview"
                              alt=""
                            />
                          </span>
                        </div>
                        <div className="nft__item_info">
                          <span>
                            <h4>{this.state.event.item_title}</h4>
                          </span>
                          <div className="nft__item_price">
                            {this.state.event.item_price}
                            <span>ALGO</span>
                          </div>
                          <div className="nft__item_action">
                            <span>Buy Ticket</span>
                          </div>
                          <div className="nft__item_like">
                            <i className="fa fa-heart"></i>
                            <span>50</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-xs-12">
                        <div className="spacer-10"></div>
                        <input
                          type="button"
                          id="submit"
                          className="btn-main"
                          value="Next"
                          onClick={() => {
                            this.setState({
                              ...this.state,
                              tab: 'Artist'
                            });
                            window.scrollTo({
                              top: 0,
                              behavior: 'smooth'
                            });
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </section>
              </Tab>
              <Tab eventKey="Artist" title="Artist">
                <section className="container" style={containerStyle}>
                  <div
                    className="col-lg-4 col-md-6 demo-icon-wrap"
                    style={{
                      position: 'absolute',
                      top: 0
                    }}
                  >
                    <i
                      className="fa fa-fw"
                      aria-hidden="true"
                      title="Copy to use plus"
                      style={{ cursor: 'pointer' }}
                      onClick={this.addArtist}
                    >
                      
                    </i>
                    Add Artist
                    <span className="text-grey">[&amp;#xf067;]</span>
                  </div>
                  <div className="row">
                    <div className="col-lg-7 offset-lg-1 mb-5" style={artistRowStyle}>
                      {this.state.artists.map((k, i) => this.newArtist(k, i))}
                    </div>
                    <div className="col-lg-3 col-sm-6 col-xs-12">
                      <h5>Preview item</h5>
                      <div className="nft__item m-0">
                        <div className="de_countdown">
                          <Clock deadline={this.state.event.item_time} />
                        </div>
                        <div className="author_list_pp">
                          {this.context.user && (
                            <span>
                              <img className="lazy" src={this.context.user.photo.url} alt="" />
                              <i className="fa fa-check"></i>
                            </span>
                          )}
                        </div>
                        <div className="nft__item_wrap">
                          <span>
                            <img
                              src={
                                this.state.image ? this.state.image : './img/placeholder/ticket.png'
                              }
                              id="get_file_2"
                              className="lazy nft__item_preview"
                              alt=""
                            />
                          </span>
                        </div>
                        <div className="nft__item_info">
                          <span>
                            <h4>{this.state.event.item_title}</h4>
                          </span>
                          <div className="nft__item_price">
                            {this.state.event.item_price}
                            <span>ALGO</span>
                          </div>
                          <div className="nft__item_action">
                            <span>Buy Ticket</span>
                          </div>
                          <div className="nft__item_like">
                            <i className="fa fa-heart"></i>
                            <span>50</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-xs-12">
                        <div className="spacer-10"></div>
                        <input
                          type="button"
                          id="submit"
                          className="btn-main"
                          value="Next"
                          onClick={() => {
                            this.setState({
                              ...this.state,
                              tab: 'Create'
                            });
                            window.scrollTo({
                              top: 0,
                              behavior: 'smooth'
                            });
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </section>
              </Tab>
              <Tab eventKey="Create" title="Create">
                <section className="container" style={containerStyle}>
                  <div className="row">
                    <div className="col-lg-7 offset-lg-1 mb-5">
                      <form id="form-create-item" className="form-border" action="#">
                        <div className="field-set">
                          <h5>Upload file</h5>
                          <h5>Price</h5>
                          <input
                            type="number"
                            name="item_price"
                            id="item_price"
                            className="form-control"
                            placeholder="enter price for one item (ALGOS)"
                            onChange={this.onInputChange}
                          />
                          <h5>Tickets</h5>
                          <input
                            type="number"
                            name="item_tickets"
                            id="item_tickets"
                            className="form-control"
                            placeholder="enter the number of tickets"
                            onChange={this.onInputChange}
                          />
                          <div className="spacer-10"></div>
                          <h5>Royalties</h5>
                          <input
                            type="number"
                            name="item_royalties"
                            id="item_royalties"
                            className="form-control"
                            placeholder="suggested: 0, 10%, 20%, 30%. Maximum is 70%"
                            onChange={this.onInputChange}
                          />
                          <div className="spacer-10"></div>
                          <h5>Date</h5>
                          <input
                            type="datetime-local"
                            name="item_time"
                            id="item_time"
                            className="form-control"
                            placeholder="suggested: 0, 10%, 20%, 30%. Maximum is 70%"
                            onChange={this.onInputChange}
                          />
                          <div className="spacer-10"></div>
                          <h5>Location</h5>
                          <input
                            type="location"
                            name="item_location"
                            id="item_location"
                            className="form-control"
                            placeholder="suggested: 0, 10%, 20%, 30%. Maximum is 70%"
                            onChange={this.onInputChange}
                          />
                        </div>
                      </form>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-xs-12">
                      <h5>Preview item</h5>
                      <div className="nft__item m-0">
                        <div className="de_countdown">
                          <Clock deadline={this.state.event.item_time} />
                        </div>
                        <div className="author_list_pp">
                          {this.context.user && (
                            <span>
                              <img className="lazy" src={this.context.user.photo.url} alt="" />
                              <i className="fa fa-check"></i>
                            </span>
                          )}
                        </div>
                        <div className="nft__item_wrap">
                          <span>
                            <img
                              src={
                                this.state.image ? this.state.image : './img/placeholder/ticket.png'
                              }
                              id="get_file_2"
                              className="lazy nft__item_preview"
                              alt=""
                            />
                          </span>
                        </div>
                        <div className="nft__item_info">
                          <span>
                            <h4>{this.state.event.item_title}</h4>
                          </span>
                          <div className="nft__item_price">
                            {this.state.event.item_price}
                            <span>ALGO</span>
                          </div>
                          <div className="nft__item_action">
                            <span>Buy Ticket</span>
                          </div>
                          <div className="nft__item_like">
                            <i className="fa fa-heart"></i>
                            <span>50</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-xs-12">
                        <div className="spacer-10"></div>
                        <input
                          type="button"
                          id="submit"
                          className="btn-main"
                          value="Create"
                          onClick={() => {
                            this.setState({
                              ...this.state,
                              loading: true,
                              contractState: 'Deploying Contract'
                            });
                            this.deploy();
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </section>
              </Tab>
            </Tabs>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
export default withRouter(Createpage);
