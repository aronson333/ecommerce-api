require('dotenv').config();

const Sequelize = require('sequelize');

console.log({ dbName: process.env.DB_NAME, user: process.env.DB_USER, password: process.env.DB_PASSWORD, jawsDB: process.env.JAWSDB_URL})

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
