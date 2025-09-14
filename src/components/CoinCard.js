
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';

const CoinCard = ({ coin, onStake }) => {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image={coin.logoUrl}
        alt={`${coin.name} logo`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {coin.name} ({coin.symbol})
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {coin.description}
        </Typography>
      </CardContent>
      <Box sx={{ p: 2 }}>
        <Button variant="contained" onClick={() => onStake(coin)}>Stake</Button>
      </Box>
    </Card>
  );
};

export default CoinCard;
