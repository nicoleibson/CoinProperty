
import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import CoinList from '../components/CoinList';
import StakingModal from '../components/StakingModal';
import { getCoins } from '../services/api';

const Home = () => {
  const [coins, setCoins] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchCoins = async () => {
      const coinData = await getCoins();
      setCoins(coinData);
    };
    fetchCoins();
  }, []);

  const handleOpenModal = (coin) => {
    setSelectedCoin(coin);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedCoin(null);
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ my: 4, textAlign: 'center' }}>
        Promoted Coins
      </Typography>
      <CoinList coins={coins} onStake={handleOpenModal} />
      <StakingModal
        open={isModalOpen}
        handleClose={handleCloseModal}
        coin={selectedCoin}
      />
    </Container>
  );
};

export default Home;
