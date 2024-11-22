import React from 'react'
import Header from './Header';
import Wallet from './Wallet';
import Hero from './Hero';
import { useActiveAccount } from "thirdweb/react";
import Footer from './Footer';

export default function DS() {
      const activeAccount = useActiveAccount();
  return (
    <div className="App text-neutral-200 tracking-tight">
      <Header />
      {activeAccount?.address ? (
        <Wallet />
      ) : (
        <>
          <Hero />
          <Footer />
        </>
      )}
    </div>
  );
     
}
