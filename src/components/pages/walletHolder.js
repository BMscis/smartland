import React, { useEffect } from 'react';
import Wallet from '../components/wallet';
import Footer from '../components/footer';
import { AwsHook } from '../../core/context/AwsContext';
import { useNavigate } from 'react-router-dom';

const WalletHolder = () => {
  const { wallet, user } = AwsHook();
  const navigate = useNavigate();
  useEffect(() => {
    if (wallet) {
      if (user) navigate(`/Author/${user.user}`);
      else navigate(`/login`);
    }
  }, [wallet]);
  return (
    <div>
      <section className="jumbotron breadcumb no-bg">
        <div className="mainbreadcumb">
          <div className="container">
            <div className="row m-10-hor">
              <div className="col-12">
                <h1 className="text-center">Wallet</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <Wallet />
      </section>
      <Footer />
    </div>
  );
};
export default WalletHolder;
