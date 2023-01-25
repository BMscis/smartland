import React, { Component, useEffect, useState } from "react";
import Clock from "../components/Clock";
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';
import { AwsContext } from "../../core/context/AwsContext";
import { withProps } from "../../utils";
import * as backend from "../../smartContract/build/index.main.mjs"
import { AVATAR, BIDS, OWNER } from "../../models";
import { UpdateAuthor, UpdateNFTS } from "../../core/store";
import Checkout from "../components/circleCheckout";
const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.white {
    background: #212428;
  }
`;
class Colection extends Component {
    static contextType = AwsContext
    constructor(props) {
        super(props)
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.deploy = this.deploy.bind(this)
        this.handleBtnClick1 = this.handleBtnClick1.bind(this);
        this.handleBtnClick2 = this.handleBtnClick2.bind(this);
        this.onInputChange = this.onInputChange.bind(this)
        this.openCheckoutCard = this.openCheckoutCard.bind(this);
        this.closeCheckoutCard = this.closeCheckoutCard.bind(this);
        this.state = {
            stage: {
                openMenu: false,
                openMenu1: false,
                openMenu2: true,
                openCheckout: false,
                openCheckoutBid: false
            },
            nftId: this.props.nftId ? this.props.nftId.nftId : null,
            nft: null,
            artists: null,
            attendees:null,
            event: null,

        }
    }
    //Reach
    async deploy() {
        const stdlib = this.context.stdlib
        const tokenID = JSON.parse(this.state.nft.event.tokenID)
        const contractAddress = JSON.parse(this.state.nft.event.contractAddress)
        const ticketNum = parseInt(this.state.event.buy_now_qty)
        const price = parseInt(this.state.nft.price)
        const acc = this.context.wallet.Main
        await acc.tokenAccept(tokenID)
        this.contract = await acc.contract(backend, contractAddress)

        if (this.contract) {
            const pay = Math.abs(price * ticketNum)
            const cur = stdlib.parseCurrency(pay)
            const buy = {"price":cur,"amount":ticketNum}
            const res = await this.contract.a.ATTENDEE.buy(buy)
            const [didBuy, tokenBal, tokenSup, tokenSold, balance] = res
            if (didBuy) {
                const nftBids = this.state.nft.bids
                const authorBids = this.context.user.bidHistory
                const ticketSold = stdlib.bigNumberToNumber(tokenSold)
                const bid = new BIDS({
                    value: pay,
                    nftId: this.state.nft.id,
                    buyer: new OWNER({
                        author: this.context.user.user,
                        banner: new AVATAR(this.context.user.banner),
                        avatar: new AVATAR(this.context.user.photo),
                        username: this.context.user.social
                    }),
                    createdAt: JSON.stringify(Date.now())
                })
                const newNftBids = [...nftBids, bid]
                const newAuthBids = [...authorBids, bid]
                const resp = await UpdateNFTS(
                    this.state.nft.id,
                    ticketSold,
                    newNftBids
                )
                const resp2 = await UpdateAuthor(
                    this.context.user.id,
                    newAuthBids
                )
                if (resp && resp2){
                    this.closeCheckoutCard()
                }
            }
        }


    }
    onInputChange(e) {
        const val = e.target.id
        const event = { ...this.state.event }
        event[val] = e.target.value
        this.setState(
            {
                ...this.state,
                event
            }
        )
    }
    openCheckoutCard() {
        this.setState({
            ...this.state,
            stage: {
                ...this.state.stage,
                openCheckout: true
            }
        })
    }
    closeCheckoutCard() {
        this.setState({
            ...this.state,
            stage: {
                ...this.state.stage,
                openCheckout: false
            }
        })
    }
    handleBtnClick() {
        this.setState({
            ...this.state,
            stage: {
                ...this.state.stage,
                openMenu: !this.state.stage.openMenu,
                openMenu1: false,
                openMenu2: false
            }
        })

        document.getElementById("Mainbtn").classList.add("active");
        document.getElementById("Mainbtn1").classList.remove("active");
        document.getElementById("Mainbtn2").classList.remove("active");
    };
    handleBtnClick2() {
        this.setState({
            ...this.state,
            stage: {
                ...this.state.stage,
                openMenu2: !this.state.stage.openMenu2,
                openMenu1: false,
                openMenu: false
            }
        })

        document.getElementById("Mainbtn2").classList.add("active");
        document.getElementById("Mainbtn1").classList.remove("active");
        document.getElementById("Mainbtn").classList.remove("active");
    };
    handleBtnClick1() {
        this.setState({
            ...this.state,
            stage: {
                ...this.state.stage,
                openMenu1: !this.state.stage.openMenu1,
                openMenu: false,
                openMenu2: false,
            }
        })

        document.getElementById("Mainbtn1").classList.add("active");
        document.getElementById("Mainbtn").classList.remove("active");
        document.getElementById("Mainbtn2").classList.remove("active");
    };
    componentDidUpdate() {
    }
    // componentDidUpdate(){
    //     if(!this.context.authors) return
    //     if(!this.context.nfts) return
    //     if(!this.state.nftId) return
    //     const nfts = this.context.nfts
    //     const nft = nfts ? nfts.filter(nf => nf.id == this.state.nftId)[0] : null
    //     const artists = nft ? nft.event.artists : null
    //     const event = nft ? nft.event : null
    //     this.setState({
    //         ...this.state,
    //         nft,artists,event
    //     })
    // }
    componentDidMount() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        // if(!this.context.authors) return
        // if(!this.context.nfts) return
        // if(!this.state.nftId) return
        const nfts = this.context.nfts
        const nft = nfts ? nfts.filter(nf => nf.id == this.state.nftId)[0] : null
        const artists = nft ? nft.event.artists : null
        const attendees = nft ? nft.bids : null
        const event = nft ? nft.event : null
        this.setState({
            ...this.state,
            nft, artists, event,attendees
        })
    }
    render() {
        return (
            <div>
                <GlobalStyles />

                <section className='container'>
                    {this.state.nft &&
                        <div className='row mt-md-5 pt-md-4'>
                            <div className="col-md-6 text-center">
                                <img src={this.state.nft.preview_image.url} className="img-fluid img-rounded mb-sm-30" alt="" />
                            </div>
                            <div className="col-md-6">
                                <div className="item_info">
                                    Event starts in
                                    <div className="de_countdown">
                                        <Clock deadline={this.state.nft.deadline} />
                                    </div>
                                    <h2>{this.state.nft.title}</h2>
                                    <div className="item_info_counts">
                                        <div className="item_info_type"><i className="fa fa-image"></i>{this.state.nft.category}</div>
                                        <div className="item_info_views"><i className="fa fa-eye"></i> {this.state.nft.views} </div>
                                        <div className="item_info_like"><i className="fa fa-heart"></i>{this.state.nft.likes} </div>
                                    </div>
                                    <p>{this.state.nft.description}</p>

                                    <h6>Creator</h6>
                                    <div className="item_author">
                                        <div className="author_list_pp">
                                            <span>
                                                <img className="lazy" src={this.state.nft.owner.avatar.url} alt="" />
                                                <i className="fa fa-check"></i>
                                            </span>
                                        </div>
                                        <div className="author_list_info">
                                            <span>{this.state.nft.owner.username}</span>
                                        </div>
                                    </div>

                                    <div className="spacer-40"></div>
                                    <div className="p_list_info">
                                        <span>
                                            <span>Price <b>{this.state.nft.price} {this.state.nft.chain}</b></span>

                                            {/* button for checkout */}
                                            <span className="d-flex flex-row mt-5">
                                                <button className='btn-main lead mb-5 mr15' onClick={this.openCheckoutCard}>Buy Now</button>
                                                {/* <button className='btn-main btn2 lead mb-5' onClick={() => setOpenCheckoutbid(true)}>Place Bid</button> */}
                                            </span>
                                        </span>
                                    </div>
                                    <div className="de_tab">

                                        <ul className="de_nav">
                                            <li id='Mainbtn2' className="active"><span onClick={this.handleBtnClick2}>Artists</span></li>
                                            <li id='Mainbtn' className=""><span onClick={this.handleBtnClick}>Attending</span></li>
                                            <li id='Mainbtn1' className=''><span onClick={this.handleBtnClick1}>History</span></li>
                                        </ul>

                                        <div className="de_tab_content">
                                            {this.state.stage.openMenu2 && (
                                                <div className="tab-1 onStep fadeIn">
                                                    {this.state.artists &&
                                                        this.state.artists.map(function (k, i) {
                                                            return <div className="p_list">
                                                                <div className="p_list_pp" key={i}>
                                                                    <span>
                                                                        <img className="lazy" src={k.image.url} alt="" />
                                                                        <i className="fa fa-check"></i>
                                                                    </span>
                                                                </div>
                                                                <div className="p_list_info">
                                                                    Artist <b>{k.name}</b>
                                                                </div>
                                                            </div>
                                                        })}
                                                </div>
                                            )}
                                            {this.state.stage.openMenu &&
                                                <div className="tab-1 onStep fadeIn">
                                                    {this.state.attendees &&
                                                        this.state.attendees.map(function (k, i) {
                                                            return <div className="p_list">
                                                                <div className="p_list_pp" key={i}>
                                                                    <span>
                                                                        <img className="lazy" src={k.buyer.avatar.url} alt="" />
                                                                        <i className="fa fa-check"></i>
                                                                    </span>
                                                                </div>
                                                                <div className="p_list_info">
                                                                    Artist <b>{k.buyer.username}</b>
                                                                </div>
                                                            </div>
                                                        })}
                                                </div>
                                            }
                                            {this.state.stage.openMenu1 && (
                                                <div className="tab-2 onStep fadeIn">
                                                    <div className="p_list">
                                                        <div className="p_list_pp">
                                                            <span>
                                                                <img className="lazy" src="./img/author/author-5.jpg" alt="" />
                                                                <i className="fa fa-check"></i>
                                                            </span>
                                                        </div>
                                                        <div className="p_list_info">
                                                            Bid <b>0.005 {this.state.nft.chain}</b>
                                                            <span>by <b>Jimmy Wright</b> at 6/14/2021, 6:40 AM</span>
                                                        </div>
                                                    </div>

                                                    <div className="p_list">
                                                        <div className="p_list_pp">
                                                            <span>
                                                                <img className="lazy" src="./img/author/author-1.jpg" alt="" />
                                                                <i className="fa fa-check"></i>
                                                            </span>
                                                        </div>
                                                        <div className="p_list_info">
                                                            Bid accepted <b>0.005 {this.state.nft.chain}</b>
                                                            <span>by <b>Monica Lucas</b> at 6/15/2021, 3:20 AM</span>
                                                        </div>
                                                    </div>

                                                    <div className="p_list">
                                                        <div className="p_list_pp">
                                                            <span>
                                                                <img className="lazy" src="./img/author/author-2.jpg" alt="" />
                                                                <i className="fa fa-check"></i>
                                                            </span>
                                                        </div>
                                                        <div className="p_list_info">
                                                            Bid <b>0.005 {this.state.nft.chain}</b>
                                                            <span>by <b>Mamie Barnett</b> at 6/14/2021, 5:40 AM</span>
                                                        </div>
                                                    </div>

                                                    <div className="p_list">
                                                        <div className="p_list_pp">
                                                            <span>
                                                                <img className="lazy" src="./img/author/author-3.jpg" alt="" />
                                                                <i className="fa fa-check"></i>
                                                            </span>
                                                        </div>
                                                        <div className="p_list_info">
                                                            Bid <b>0.004 {this.state.nft.chain}</b>
                                                            <span>by <b>Nicholas Daniels</b> at 6/13/2021, 5:03 AM</span>
                                                        </div>
                                                    </div>

                                                    <div className="p_list">
                                                        <div className="p_list_pp">
                                                            <span>
                                                                <img className="lazy" src="./img/author/author-4.jpg" alt="" />
                                                                <i className="fa fa-check"></i>
                                                            </span>
                                                        </div>
                                                        <div className="p_list_info">
                                                            Bid <b>0.003 {this.state.nft.chain}</b>
                                                            <span>by <b>Lori Hart</b> at 6/12/2021, 12:57 AM</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </section>

                <Footer />
                {this.state.stage.openCheckout &&
                    <div className='checkout'>
                        {/* <Checkout></Checkout> */}
                        {this.state.event &&
                            <div className='maincheckout'>
                                <button className='btn-close' onClick={this.closeCheckoutCard}>x</button>
                                <div className='heading'>
                                    <h3>Checkout</h3>
                                </div>
                                <p>You are about to purchase a
                                    <p className="bold">{this.state.nft.title}</p>
                                    <span className="bold">from {this.state.nft.owner.username}</span></p>
                                <div className='detailcheckout mt-4'>
                                    <div className='listcheckout'>
                                        <h6>
                                            Enter quantity.
                                            <div className="color">Tickets Remaining: {this.state.event.tickets - this.state.event.ticketSold}</div>
                                        </h6>
                                        <input type="number" name="buy_now_qty" id="buy_now_qty" className="form-control" onChange={this.onInputChange} />
                                    </div>

                                </div>
                                <div className='heading mt-3'>
                                    <p>Your balance</p>
                                    <div className='subtotal'>
                                        10.67856 {this.state.nft.chain}
                                    </div>
                                </div>
                                <div className='heading'>
                                    <p>Service fee 2.5%</p>
                                    <div className='subtotal'>
                                        0.00325 {this.state.nft.chain}
                                    </div>
                                </div>
                                <div className='heading'>
                                    <p>You will pay</p>
                                    <div className='subtotal'>
                                        0.013325 {this.state.nft.chain}
                                    </div>
                                </div>
                                <button className='btn-main lead mb-5' onClick={this.deploy}> Checkout</button>
                            </div>
                        }
                    </div>
                }
                {this.openCheckoutbid &&
                    <div className='checkout'>
                        <div className='maincheckout'>
                            {/* <button className='btn-close' onClick={() => setOpenCheckoutbid(false)}>x</button> */}
                            <div className='heading'>
                                <h3>Place a Bid</h3>
                            </div>
                            <p>You are about to purchase a <span className="bold">AnimeSailorClub #304</span>
                                <span className="bold">from Monica Lucas</span></p>
                            <div className='detailcheckout mt-4'>
                                <div className='listcheckout'>
                                    <h6>
                                        Your bid ({this.state.nft.chain})
                                    </h6>
                                    <input type="number" className="form-control" onChange={this.onInputChange} />
                                </div>
                            </div>
                            <div className='detailcheckout mt-3'>
                                <div className='listcheckout'>
                                    <h6>
                                        Enter quantity.
                                        <span className="color">10 available</span>
                                    </h6>
                                    <input type="number" name="buy_now_qty" id="buy_now_qty" className="form-control" onChange={this.onInputChange} />
                                </div>
                            </div>
                            <div className='heading mt-3'>
                                <p>Your balance</p>
                                <div className='subtotal'>
                                    10.67856 {this.state.nft.chain}
                                </div>
                            </div>
                            <div className='heading'>
                                <p>Service fee 2.5%</p>
                                <div className='subtotal'>
                                    0.00325 {this.state.nft.chain}
                                </div>
                            </div>
                            <div className='heading'>
                                <p>You will pay</p>
                                <div className='subtotal'>
                                    0.013325 {this.state.nft.chain}
                                </div>
                            </div>
                            <button className='btn-main lead mb-5' onClick={this.deploy}>Checkout</button>
                        </div>
                    </div>
                }

            </div>
        );
    }
}
export default withProps(Colection);