// models/user.js

const Sequelize = require('sequelize');
const sequelize = require('./database');

const User = sequelize.define('User', {
  
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = User;
