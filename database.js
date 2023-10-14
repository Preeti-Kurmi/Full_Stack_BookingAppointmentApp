// config/database.js

const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodesql', 'root', 'Sagar!@#123', {
  host: 'localhost',
  dialect: 'mysql', // Use 'mysql', 'postgres', 'sqlite', or 'mariadb'
});

module.exports = sequelize;
