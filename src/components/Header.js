
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = ({ userAddress, onConnect }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          CoinProperty
        </Typography>
        <Button color="inherit" onClick={onConnect}>
          {userAddress ? `${userAddress.substring(0, 6)}...${userAddress.substring(userAddress.length - 4)}` : 'Connect Wallet'}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
