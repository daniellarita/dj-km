'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const OrderProduct = db.define('order_products', {
  quantity: Sequelize.INTEGER
});

module.exports = OrderProduct;
