import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AwsContext } from "../../core/context/AwsContext";
import { withRouter } from "../../utils";

const divStyle = {
  position: "absolute",
  bottom: "30%"
}
class CustomSlide extends Component {
  render() {
    const { index, ...props } = this.props;
    return (
      <div {...props}></div>
    );


  }
}

class Responsive extends Component {
  static contextType = AwsContext
  constructor() {
    super()
    this.state = {
      nfts: null
    }
  }
  componentDidUpdate() {
    if (this.state.nfts) return
    if (!this.context.nfts) return
    try {
      this.setState({
        ...this.state,
        nfts: this.context.nfts
      })
    } catch (error) { console.log("error", error) }

  }
  componentDidMount() {
    {
      if (this.state.nfts) return
      if (!this.context.nfts) return
      try {
          this.setState({
              ...this.state,
              nfts: this.context.nfts
          })
      } catch (error) { console.log("error") }

  }
  }
  render() {
    var settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      adaptiveHeight: 300,
      responsive: [
        {
          breakpoint: 1900,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        }
      ]
    };

    return (
      <>
        {this.state.nfts &&
          <div className='nft-big'>
            <Slider {...settings}>
              {this.state.nfts && this.state.nfts.map((nft, i) => {
                return <CustomSlide className='itm' index={i + 1} key={i + 1} >
                  <div className="nft_pic" onClick={() => { this.props.navigate(`/ItemDetail/${nft.id}`) }}>
                    <span>
                      <span className="nft_pic_info">
                        <span className="nft_pic_title">{nft.title}</span>
                        <span className="nft_pic_by">{nft.owner.username}</span>
                      </span>
                    </span>
                    <div style={divStyle}>
                      <span className="nft_pic_info">
                        <div className="nft_pic_by">
                          <span> Location: </span> <span>{nft.event.location}</span>
                        </div>
                        <div className="nft_pic_by">
                          <span>Remaining: </span> <span>{nft.event.tickets - nft.event.ticketSold}</span>
                        </div>
                      </span>
                    </div>
                    <div className="nft_pic_wrap">
                      <img src={nft.preview_image.url} className="lazy img-fluid" alt="" />
                    </div>
                  </div>
                </CustomSlide>
              })}


            </Slider>
          </div>
        }
      </>
    );
  }
}
export default withRouter(Responsive)
