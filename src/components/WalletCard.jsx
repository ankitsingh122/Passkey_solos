import React from 'react'
import Send from './Send';
import View from './View';
import Receive from './Receive';
import { useCustomTokenBalance } from '../utils/hooks';
import { ImSpinner9 } from "react-icons/im";
import { MdOutlineRefresh } from "react-icons/md";
import { PasskeyList, useCorbado } from '@corbado/react';
import { useNavigate } from 'react-router-dom';

function WalletCard({
    icon,
    name,
    symbol,
    address,
    handleShow,
    setTokenToSend
}) {
    const handleClickSend = () => {
        setTokenToSend({
            icon,
            name,
            symbol,
            tokenAddress: address,
            balance: balance?.displayValue
        });
        handleShow();
    }
    const { isLoading, balance, price, refetch } = useCustomTokenBalance({
        tokenAddress: address
    });

    const {isAuthenticated,loading,logout,user}=useCorbado();
    const navigate=useNavigate();
    if(!isAuthenticated && !isLoading)
    {
        navigate('/')
    }
    return (
      <>
        <div class="wallet-card d-flex justify-content-between mb-2">
          <div class="title-container">
            <img class="asset-img" src={icon} alt="" />
            <div>
              <h5 class="asset-title text-start">{name}</h5>
              {isLoading ? (
                <>
                  <h6 class="asset-subtitle text-start">
                    <ImSpinner9 className="loading mx-2" />
                  </h6>
                </>
              ) : (
                <>
                  <h6 class="asset-subtitle text-start">
                    {balance && balance?.displayValue} {symbol}
                  </h6>
                  <h6 class="asset-text text-start">
                    $
                    {+price > 0
                      ? Number(balance?.displayValue * price).toFixed(6)
                      : 0}{" "}
                    USD
                  </h6>
                </>
              )}
            </div>
          </div>
          <div class="icon-container">
            <div class="icon-circle">
              <MdOutlineRefresh onClick={refetch} />
            </div>

            <Send onClick={handleClickSend} />
            <Receive address={address} />
            <View address={address} />
          </div>
        </div>

        <div className="text-center max-w-md mx-auto my-5 break-words border rounded-xl p-3 container-sm">
          <h1 className="text-2xl">Profile</h1>
          {user && (
            <>
              <p>Email:{user.email}</p>
              {/* <p>Name:{user.name}</p> */}
              <div className="text-2xl">
                <PasskeyList />
              </div>
              <button
                className="bg-blue-300 px-3 py-2 rounded-full"
                onClick={logout}
              >
                Logout
              </button>
            </>
          )}
        </div>
      </>
    );
}

export default WalletCard
