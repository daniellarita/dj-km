'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const OrderProduct = db.define('order_products', {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  price: {
    type: Sequelize.FLOAT,
    defaultValue: 0
  },
  totalAmount: {
    // this is just price * quantity per product
    type: Sequelize.FLOAT,
    defaultValue: 0
  }
}, {
  hooks: {
    beforeValidate: function() {
      return this.totalAmount = this.price * this.quantity;
    }
  }
});

module.exports = OrderProduct;
