
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';

export const useWallet = () => {
  const [address, setAddress] = useState(null);
  const [provider, setProvider] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const web3Provider = new ethers.BrowserProvider(window.ethereum);
        await web3Provider.send("eth_requestAccounts", []);
        const signer = await web3Provider.getSigner();
        const userAddress = await signer.getAddress();
        setProvider(web3Provider);
        setAddress(userAddress);
      } catch (error) {
        console.error("Error connecting to wallet:", error);
      }
    } else {
      alert('Please install MetaMask!');
    }
  };

  return { address, provider, connectWallet };
};
