
const express = require('express');
const cors = require('cors');
const { Coin } = require('./database');

const app = express();
app.use(cors());
const PORT = 3001;

app.get('/api/coins', async (req, res) => {
  const coins = await Coin.findAll();
  res.json(coins);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
