import React from 'react';
import ScrollToTopBtn from './menu/ScrollToTop';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './menu/header';
import Home from './pages/home';
// import Home1 from './pages/home1';
// import Home2 from './pages/home2';
import Explore from './pages/explore';
// import Explore2 from './pages/explore2';
import Helpcenter from './pages/helpcenter';
// import Rangking from './pages/rangking';
import Colection from './pages/colection';
import ItemDetail from './pages/ItemDetail';
import Author from './pages/Author';
import WalletHolder from './pages/walletHolder';
import Login from './pages/login';
import Register from './pages/register';
import Price from './pages/price';
import Works from './pages/works';
import News from './pages/news';
import Create from './pages/create';
import Auction from './pages/Auction';
import Activity from './pages/activity';
import Contact from './pages/contact';
import ElegantIcons from './pages/elegantIcons';
import EtlineIcons from './pages/etlineIcons';
import FontAwesomeIcons from './pages/fontAwesomeIcons';
import Accordion from './pages/accordion';
import Alerts from './pages/alerts';
import Progressbar from './pages/progressbar';
import Tabs from './pages/tabs';

import { createGlobalStyle } from 'styled-components';
import auth from '../core/auth';
import Profile from './pages/Profile';
import { AwsHook } from '../core/context/AwsContext';

const GlobalStyles = createGlobalStyle`
  :root {
    scroll-behavior: unset;
  }
`;

export const ScrollTop = ({ children, location }) => {
  React.useEffect(() => window.scrollTo(0, 0), [location]);
  return children;
};

const ProtectedRoute = ({ children }) => {
  let location = useLocation();
  const isAuth = auth.getToken() !== null;

  return isAuth ? children : <Navigate to="/login" state={{ from: location }} replace />;
};
const ProtectedWalletRoute = ({ children }) => {
  let location = useLocation();
  const { wallet } = AwsHook();
  const isAuth = wallet !== null;

  return isAuth ? children : <Navigate to="/wallet" state={{ from: location }} replace />;
};
if ('virtualKeyboard' in navigator) {
  // The VirtualKeyboard API is supported!
  console.log('Navigator');
  navigator.virtualKeyboard.overlaysContent = true;
}
const app = () => (
  <div className="wraper">
    <GlobalStyles />
    <Header />
    <Routes>
      <Route path="*" element={<Navigate to="/home" replace />} />
      <Route path="/Author">
        <Route
          path=":authorId"
          element={
            <ProtectedRoute>
              <Author />
            </ProtectedRoute>
          }
        />
      </Route>
      <Route path="/Profile">
        <Route
          path=":authorId"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Route>
      <Route path="/home" element={<Home />} />
      {/* <Route element={<Home1/>} path="/home1" />
      <Route element={<NFTSCreateForm/>} path="/create" />
      <Route element={<Home2/>} path="/home2" /> */}
      <Route element={<Explore />} path="/explore" />
      {/* <Route element={<Explore2/>} path="/explore2" /> */}
      {/* <Route element={<ExploreOpensea/>} path="/exploreOpensea" /> */}
      {/* <Route element={<Ranking/>} path="/rangking" /> */}
      <Route element={<Auction />} path="/Auction" />
      <Route element={<Helpcenter />} path="/helpcenter" />
      <Route element={<Colection />} path="/colection/:collectionId" />
      <Route path="/ItemDetail">
        <Route
          path=":nftId"
          element={
            <ProtectedWalletRoute>
              <ItemDetail />
            </ProtectedWalletRoute>
          }
        />
      </Route>
      {/* <Route element={<AuthorOpensea />} path="/AuthorOpensea" /> */}
      <Route element={<WalletHolder />} path="/wallet" />
      <Route element={<Login />} path="/login" />
      {/* <Route element={<LoginTwo />} path="/loginTwo" /> */}
      <Route element={<Register />} path="/register" />
      <Route element={<Price />} path="/price" />
      <Route element={<Works />} path="/works" />
      <Route element={<News />} path="/news" />
      {/* <Route element={<NewsSingle />} path="/news/:postId" /> */}
      <Route path="/create">
        <Route
          path=""
          element={
            <ProtectedWalletRoute>
              <Create />
            </ProtectedWalletRoute>
          }
        />
      </Route>
      {/* <Route element={<Create2 />} path="/create2" />
      <Route element={<Create3 />} path="/create3" /> */}
      {/* <Route element={<Createoption />} path="/createOptions" /> */}
      <Route element={<Activity />} path="/activity" />
      <Route element={<Contact />} path="/contact" />
      <Route element={<ElegantIcons />} path="/elegantIcons" />
      <Route element={<EtlineIcons />} path="/etlineIcons" />
      <Route element={<FontAwesomeIcons />} path="/fontAwesomeIcons" />
      <Route element={<Accordion />} path="/accordion" />
      <Route element={<Alerts />} path="/alerts" />
      <Route element={<Progressbar />} path="/progressbar" />
      <Route element={<Tabs />} path="/tabs" />
      {/* <Route element={<Minter />} path="/mint" /> */}
    </Routes>
    <ScrollToTopBtn />
  </div>
);
export default app;
