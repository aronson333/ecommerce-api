require('dotenv').config();

const Sequelize = require('sequelize');

// console.log({ dbName: process.env.DB_NAME, user: process.env.DB_USER, password: process.env.DB_PASSWORD})

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: '127.0.0.1',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
