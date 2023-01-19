import { useEffect, useRef, useState } from "react"

const fileStyle = {
    padding: "05px",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
}
const inputStyle = {
    maxWidth: "100px",
    position: "absolute",
    opacity: 0,
}
const iconStyle = {
    position:"relative",
    height: "50px",
    margin: "auto",
    padding: 0,
    display: "flex",
}
const spanStyle = {
    margin:"unset",
    width: "50px",
    height: "50px",
    display: "flex",
    background: "greenyellow",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%"
}
const faStyle = {
    position:"relative",
    background: "greenyellow",
    color: "black",
    fontSize: "14px"
}
export default function Artist({ parent }) {
    const defaultImage = "./img/placeholders/ticket.png"
    const defaultName = "Enter Name Here"
    const [aName, setName] = useState(defaultName)
    const [imgView, setImageView] = useState(null)
    const [img, setImage] = useState(defaultImage)
    const [check, setCheck] = useState(false)
    const [isShown, setIsShown] = useState(false)
    const doneIcon = "fa fa-check"
    const deleteIcon = "fa fa-times"
    function onChange(e) {
        var files = e.target.files;
        var filesArr = Array.prototype.slice.call(files);
        const i = e.target.files[0]
        const image = URL.createObjectURL(i)
        setImageView(i)
        setImage(image)
    }
    function save() {
        try {
            let sve = { "name": aName, "image": imgView }
            const artists = parent.state.event.artists
            parent.setState({
                ...parent.state,
                event: {
                    ...parent.state.event,
                    artists: [...parent.state.event.artists, sve]
                }
            })
            setCheck(true)
        } catch (error) {
            console.log(error)
        }
    }
    function deleteState(){
        setName(defaultName)
        setImage(defaultImage)
    }
    return (
        <div className="col-lg-3 col-sm-6 col-xs-12" style={{ margin: "10px" }} >
            {/* <h5>Preview item</h5> */}
            <div className="nft__item m-0" >
                <div className="author_list_pp" style={{ position: "relative" }}>
                    <span>
                        <img className="lazy" src={img} alt="" />
                        {/* <i className="fa fa-check"></i> */}
                    </span>
                </div>
                <div className="spacer-10"></div>

                {/* <div className="nft__item_wrap">
            <span>
              <img src={
                this.state.image ? this.state.image : "./img/placeholder/ticket.png"
              } id="get_file_2" className="lazy nft__item_preview" alt="" />
            </span>
          </div> */}
                <div className="nft__item_info">
                    <span >
                        <h4>Artist</h4>
                    </span>
                    {<div className="nft__item_price">
                        <div>
                            <input type="text" value={aName} style={inputStyle}
                                onChange={(e) => {setName(e.target.value)}}
                            />
                            <p>{aName}</p>
                        </div>
                        {
                            img && img === defaultImage &&
                            <div className="d-create-file" id="browse" style={fileStyle}>
                                <div className='browse' style={{ margin: "unset", transform: "scale(.5)" }}>
                                    <input type="button" id="get_file" className="btn-main" value="Upload" />
                                    <input id='upload_file' accept="image/png, image/jpeg"  type="file" multiple onChange={(e) => {
                                        onChange(e)
                                    }} />
                                </div>
                            </div>
                        }
                        {img && img !== defaultImage && aName !== defaultName && !check &&
                            <input
                                type="button"
                                id="submit"
                                className="btn-main"
                                value="Save"
                                style={{ margin: "auto" }}
                                onClick={() => { save() }}
                            />
                        }
                        {img && img !== defaultImage && aName !== defaultName && check &&
                            < div className="author_list_pp" style={iconStyle}>
                                <span onClick={() => {deleteState()}} 
                                onMouseEnter={() => setIsShown(true)}
                                onMouseLeave={() => setIsShown(false)}
                                style={spanStyle}>
                                    <i className={isShown ? deleteIcon : doneIcon } style={faStyle}></i>
                                </span>
                            </div>
                        }
                    </div>}
                    <div className="spacer-10"></div>
                    {/* <div className="nft__item_action">
                        <span>Attending</span>
                    </div> */}
                    {/* <div className="nft__item_like">
              <i className="fa fa-heart"></i><span>50</span>
            </div> */}
                </div>
            </div>
        </div >
    )
}