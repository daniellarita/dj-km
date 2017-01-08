const Sequelize = require('sequelize')
const db = require('APP/db')

const Order = db.define('orders', {
  orderNumber: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  }
},

{
  getterMethods: {

  },

  instanceMethods: {

  }
});

module.exports = Order;
