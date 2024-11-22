import React from 'react'
import ThirdwebButton from './ThirdwebButton';
import { CorbadoAuth, useCorbado } from '@corbado/react';
import { fantom } from 'thirdweb/chains';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate=useNavigate();
  const {isAuthenticated,loading}=useCorbado();
  function onLogin(params) {
    navigate('/login')
  }

    return (
      <div className="max-w-3xl d-flex flex-column align-items-center mx-auto py-8 px-4">
        <div className="d-flex flex-column align-items-center w-full">
          <h1 className="fw-bold text-6xl text-center tracking-tight text-blck">
            Welcome to&nbsp;
            <span class="bg-clip-text text-transparent">Solos Wallet</span>
          </h1>
          <div className="mx-auto">
            <img
              alt="base symbol"
              loading="lazy"
              width="400"
              height="200"
              decoding="async"
              data-nimg="1"
              src="/logo.svg"
            />
          </div>
          <div className="max-w-xs">
            <div className="my-1">
              {/* <ThirdwebButton /> */}
             
              <CorbadoAuth onLoggedIn={onLogin}/>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Hero;
