
import React from 'react';
import { Grid } from '@mui/material';
import CoinCard from './CoinCard';

const CoinList = ({ coins, onStake }) => {
  return (
    <Grid container spacing={2} sx={{ p: 3 }}>
      {coins.map(coin => (
        <Grid item xs={12} sm={6} md={4} key={coin.id}>
          <CoinCard coin={coin} onStake={onStake} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CoinList;
