import React, { Component } from "react";
import { AwsContext } from "../../core/context/AwsContext";
import Clock from "./Clock";
import { withRouter } from "../../utils";



class Responsive extends Component {
    static contextType = AwsContext
    dummyData = [{
        deadline: "December, 30, 2021",
        authorLink: "ItemDetail",
        nftLink: "ItemDetail",
        bidLink: "ItemDetail",
        authorImg: "./img/authorauthor-1.jpg",
        previewImg: "./img/items/static-1.jpg",
        title: "Pinky Ocean",
        price: "0.08 ETH",
        bid: "1/20",
        likes: 50
    },
    {
        deadline: "",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/authorauthor-10.jpg",
        previewImg: "./img/items/static-2.jpg",
        title: "Deep Sea Phantasy",
        price: "0.06 ETH",
        bid: "1/22",
        likes: 80
    },
    {
        deadline: "",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/authorauthor-11.jpg",
        previewImg: "./img/items/static-3.jpg",
        title: "Rainbow Style",
        price: "0.05 ETH",
        bid: "1/11",
        likes: 97
    },
    {
        deadline: "January, 1, 2022",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/authorauthor-12.jpg",
        previewImg: "./img/items/static-4.jpg",
        title: "Two Tigers",
        price: "0.08 ETH",
        bid: "1/20",
        likes: 50
    },
    {
        deadline: "",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/authorauthor-9.jpg",
        previewImg: "./img/items/anim-4.webp",
        title: "The Truth",
        price: "0.08 ETH",
        bid: "1/20",
        likes: 50
    },
    {
        deadline: "January, 15, 2022",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/authorauthor-2.jpg",
        previewImg: "./img/items/anim-2.webp",
        title: "Running Puppets",
        price: "0.08 ETH",
        bid: "1/20",
        likes: 50
    },
    {
        deadline: "",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/authorauthor-3.jpg",
        previewImg: "./img/items/anim-1.webp",
        title: "USA Wordmation",
        price: "0.08 ETH",
        bid: "1/20",
        likes: 50
    },
    {
        deadline: "",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/authorauthor-4.jpg",
        previewImg: "./img/items/anim-5.webp",
        title: "Loop Donut",
        price: "0.08 ETH",
        bid: "1/20",
        likes: 50
    },
    {
        deadline: "January, 3, 2022",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/authorauthor-5.jpg",
        previewImg: "./img/items/anim-3.webp",
        title: "Lady Copter",
        price: "0.08 ETH",
        bid: "1/20",
        likes: 50
    },
    {
        deadline: "",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/authorauthor-7.jpg",
        previewImg: "./img/items/static-5.jpg",
        title: "Purple Planet",
        price: "0.08 ETH",
        bid: "1/20",
        likes: 50
    },
    {
        deadline: "",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/authorauthor-6.jpg",
        previewImg: "./img/items/anim-6.webp",
        title: "Oh Yeah!",
        price: "0.08 ETH",
        bid: "1/20",
        likes: 50
    },
    {
        deadline: "January, 10, 2022",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/authorauthor-8.jpg",
        previewImg: "./img/items/anim-7.webp",
        title: "This is Our Story",
        price: "0.08 ETH",
        bid: "1/20",
        likes: 50
    },
    {
        deadline: "",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/authorauthor-9.jpg",
        previewImg: "./img/items/static-6.jpg",
        title: "Pixel World",
        price: "0.08 ETH",
        bid: "1/20",
        likes: 50
    },
    {
        deadline: "January, 10, 2022",
        authorLink: "#",
        nftLink: "#",
        bidLink: "#",
        authorImg: "./img/authorauthor-12.jpg",
        previewImg: "./img/items/anim-8.webp",
        title: "I Believe I Can Fly",
        price: "0.08 ETH",
        bid: "1/20",
        likes: 50
    }]

    constructor(props) {
        super(props);
        this.state = {
            // nfts: this.dummyData.slice(0,8),
            nfts: null,
            height: 0
        };
        this.onImgLoad = this.onImgLoad.bind(this);
    }

    loadMore = () => {
        let nftState = this.state.nfts
        let start = nftState.length
        let end = nftState.length + 4
        this.setState({
            nfts: [...nftState, ...(this.context.nfts.slice(start, end))]
        });
    }

    onImgLoad({ target: img }) {
        let currentHeight = this.state.height;
        if (currentHeight < img.offsetHeight) {
            this.setState({
                height: img.offsetHeight
            })
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
        } catch (error) { console.log("error") }

    }
    componentDidMount() {
        if (this.state.nfts) return
        if (!this.context.nfts) return
        try {
            this.setState({
                ...this.state,
                nfts: this.context.nfts
            })
        } catch (error) { console.log("error") }

    }

    render() {
        return (
            <>
                {this.state.nfts &&
                    <div className='row'>
                        {this.state.nfts &&
                            this.state.nfts.map((nft, index) => (
                                <div key={index} className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12 mb-4">
                                    <div className="nft__item m-0">
                                        {nft.deadline &&
                                            <div className="de_countdown">
                                                <Clock deadline={nft.deadline} />
                                            </div>
                                        }
                                        <div className="author_list_pp">
                                            <span onClick={() => this.props.navigate(`/Author/${nft.owner.author}`)}>
                                                <img className="lazy" src={nft.owner.avatar.url} alt="" />
                                                <i className="fa fa-check"></i>
                                            </span>
                                        </div>
                                        <div className="nft__item_wrap" style={{ height: `${this.state.height}px` }}>
                                            <span>
                                                <img onLoad={this.onImgLoad} src={nft.preview_image.url} className="lazy nft__item_preview" alt="" />
                                            </span>
                                        </div>
                                        <div className="nft__item_info">
                                            <span onClick={() => this.props.navigate(`/ItemDetail/${nft.id}`)}>
                                                <h4>{nft.title}</h4>
                                            </span>
                                            <div className="nft__item_price">
                                                {nft.price}<span>{nft.bid}</span>
                                            </div>
                                            <div className="nft__item_action">
                                                <span onClick={() => this.props.navigate(`/ItemDetail/${nft.id}`)}>Buy Ticket</span>
                                            </div>
                                            <div className="nft__item_like">
                                                <i className="fa fa-heart"></i><span>{nft.likes}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        {this.state.nfts && this.state.nfts.length !== this.context.nfts.length &&
                            <div className='col-lg-12'>
                                <div className="spacer-single"></div>
                                <span onClick={() => this.loadMore()} className="btn-main lead m-auto">Load More</span>
                            </div>
                        }
                    </div>
                }
            </>
        );
    }
}
export default withRouter(Responsive)