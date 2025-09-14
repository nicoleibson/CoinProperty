
import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const StakingModal = ({ open, handleClose, coin }) => {
  const [amount, setAmount] = useState('');

  const handleStake = () => {
    // TODO: Implement staking logic with ethers.js
    console.log(`Staking ${amount} of ${coin.symbol}`);
    handleClose();
  };

  if (!coin) return null;

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6" component="h2">
          Stake {coin.name}
        </Typography>
        <TextField
          fullWidth
          label="Amount"
          variant="outlined"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          sx={{ my: 2 }}
        />
        <Button variant="contained" onClick={handleStake}>Confirm Stake</Button>
      </Box>
    </Modal>
  );
};

export default StakingModal;
