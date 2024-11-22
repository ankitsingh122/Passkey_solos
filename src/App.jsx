import './App.css';

import Header from './components/Header';
import Hero from './components/Hero';
import { useActiveAccount } from "thirdweb/react";
import Wallet from './components/Wallet';
import Footer from './components/Footer';
import { CorbadoProvider } from '@corbado/react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import WalletCard from './components/WalletCard';
import DS from './components/DS';


function App() {
  const activeAccount = useActiveAccount();
  return (
    <CorbadoProvider projectId="pro-3979041338200975661" darkMode="on">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<WalletCard />} />
          <Route path="/" element={<DS/>} />
        </Routes>
      </BrowserRouter>
    </CorbadoProvider>
  );
}

export default App;
