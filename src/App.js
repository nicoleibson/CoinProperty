
import React from 'react';
import { CssBaseline } from '@mui/material';
import { useWallet } from './hooks/useWallet';
import Header from './components/Header';
import Home from './pages/Home';
import './App.scss'; // Puedes mantener tus estilos si lo deseas

function App() {
  const { address, connectWallet } = useWallet();

  return (
    <>
      <CssBaseline />
      <div className="App">
        <Header userAddress={address} onConnect={connectWallet} />
        <Home />
      </div>
    </>
  );
}

export default App;
