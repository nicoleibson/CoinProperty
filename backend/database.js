
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite'
});

const Coin = sequelize.define('Coin', {
  name: { type: DataTypes.STRING, allowNull: false },
  symbol: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  logoUrl: { type: DataTypes.STRING },
});

sequelize.sync().then(() => {
  // Poblar con datos de ejemplo si la tabla está vacía
  Coin.count().then(count => {
    if (count === 0) {
      Coin.bulkCreate([
        { name: 'PropertyCoin', symbol: 'PROP', description: 'Token para gobernanza de propiedades.', logoUrl: '/icon.png' },
        { name: 'EstateToken', symbol: 'EST', description: 'Token de inversión inmobiliaria.', logoUrl: '/icon.png' },
      ]);
    }
  });
});

module.exports = { sequelize, Coin };
