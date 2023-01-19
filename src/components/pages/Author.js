import React, { useEffect, useState } from "react";
import ColumnZero from '../components/ColumnZero';
import ColumnZeroTwo from '../components/ColumnZeroTwo';
import ColumnZeroThree from '../components/ColumnZeroThree';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';
import { AwsHook } from "../../core/context/AwsContext";
import {
  Link,
  useNavigate,
  useMatch,
  useResolvedPath
} from "react-router-dom";
const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.white {
    background: #212428;
  }
`;
const NavLink = (props) => {
  let resolved = useResolvedPath(props.to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      {...props}
      className={match ? 'active' : 'btn-main'}
    />
  )
};
const Colection = function ({attend}) {
  const navigate = useNavigate()
  const { wallet, user, nfts } = AwsHook()
  const [openMenu, setOpenMenu] = React.useState(true);
  const [openMenu1, setOpenMenu1] = React.useState(false);
  const [openMenu2, setOpenMenu2] = React.useState(false);
  const bidHistory = user ? user.bidHistory ? user.bidHistory : null : null
  const [boughTickets, setBoughTickets] = useState([])
  const [created, setCreated] = useState([])

  const handleBtnClick = () => {
    setOpenMenu(!openMenu);
    setOpenMenu1(false);
    setOpenMenu2(false);
    document.getElementById("Mainbtn").classList.add("active");
    document.getElementById("Mainbtn1").classList.remove("active");
    document.getElementById("Mainbtn2").classList.remove("active");
  };
  const handleBtnClick1 = () => {
    setOpenMenu1(!openMenu1);
    setOpenMenu2(false);
    setOpenMenu(false);
    document.getElementById("Mainbtn1").classList.add("active");
    document.getElementById("Mainbtn").classList.remove("active");
    document.getElementById("Mainbtn2").classList.remove("active");
  };
  const handleBtnClick2 = () => {
    setOpenMenu2(!openMenu2);
    setOpenMenu(false);
    setOpenMenu1(false);
    document.getElementById("Mainbtn2").classList.add("active");
    document.getElementById("Mainbtn").classList.remove("active");
    document.getElementById("Mainbtn1").classList.remove("active");
  };
  useEffect(() => {
    if (!user) navigate('/login')
    if (!nfts) return
    let bought = []
    try {
      bidHistory.forEach(tc => {
        const v = nfts.filter(i => i.id === tc.nftId)[0]
        bought.push(v)
      });
    } catch (error) {
      console.log(error)
    }
    const e = nfts.filter(x => x.owner.author === user.user)
    console.log({e})
    setBoughTickets(bought)
    setCreated(e)
  }, [nfts])
  return (
    <div>
      <GlobalStyles />
      {user &&
        <>
          <section className='container no-bottom'>
            <div className='row'>
              <div className='spacer-double'></div>
              <div className="col-md-12">
                <div className="d_profile de-flex">
                  <div className="de-flex-col">
                    <div className="profile_avatar">
                      <img src={user.photo.url} alt="" />
                      <div className="profile_name" style={{ position: "relative" }}>
                        <h4>
                          {user.name}
                          <span className="profile_username">{user.social}</span>
                          {!wallet &&
                            <NavLink to="/wallet" className="btn-main" style={{ display: "block" }}>Connect Wallet</NavLink>
                          }
                          {wallet &&
                            <>
                              <span id="wallet" className="profile_wallet">{wallet.Account}</span>
                              <button id="btn_copy" title="Copy Text">Copy</button>
                            </>
                          }
                        </h4>
                        {user.verified &&
                          <i className="fa fa-check" style={{
                            top: 0,
                            right: 0,
                            margin: "unset",
                            transform: "scale(.5)"
                          }}></i>
                        }

                      </div>
                    </div>
                  </div>
                  <div className="profile_follow de-flex">
                    <div className="de-flex-col">
                      <div className="profile_follower">{user.followers} followers</div>
                    </div>
                    <div className="de-flex-col">
                      <span className="btn-main">Follow</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </section>

          <section className='container no-top'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className="items_filter">
                  <ul className="de_nav text-left">
                    <li id='Mainbtn' className="active"><span onClick={handleBtnClick}>On Sale</span></li>
                    <li id='Mainbtn1' className=""><span onClick={handleBtnClick1}>Created</span></li>
                    <li id='Mainbtn2' className=""><span onClick={handleBtnClick2}>Attending</span></li>
                  </ul>
                </div>
              </div>
            </div>
            {openMenu && (
              <div id='zero1' className='onStep fadeIn'>
                <ColumnZero props={nfts}/>
              </div>
            )}
            {openMenu1 && (
              <div id='zero2' className='onStep fadeIn'>
                <ColumnZeroTwo props={created} />
              </div>
            )}
            {openMenu2 && bidHistory && (
              <div id='zero3' className='onStep fadeIn'>
                <ColumnZeroThree props={boughTickets} />
              </div>
            )}
          </section>
        </>
      }
      <Footer />
    </div>
  );
}
export default Colection;