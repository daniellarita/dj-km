'use strict'

const epilogue = require('./epilogue');
const db = require('APP/db');
const { Order, Product, User } = require('APP/db/models');
const customOrderRoutes = require('express').Router();

// Orders GET
customOrderRoutes.get('/', function (request, response, next) {
  Order.findAll({
    include: [ Product, User ]
  })
  .then((orderArray) => {
    response.json(orderArray);
  })
  .catch(next);
});

// Orders GET :orderNumber
// Add quantity, price per item, total price per product
// Add Address, Total price

// Orders POST
// Request.body must have
// - user_id: is an id (id is a string)
// - products: array of objects. each object has pId, quantity, and price (all strings)
customOrderRoutes.post('/', function (request, response, next) {

  const products = request.body.products;
  const productIds = [];
  products.forEach((product) => {
    productIds.push(product.pId);
  });

  Order.create({})
  .then((order) => {
    return User.findOne({
      where: {
        id: request.body.user_id
      }
    })
    .then((user) => {
      return order.setUser(user);
    });
  })
  .then((order) => {
    return Product.findAll({
      where: {
        id: request.body.productIds
      }
    })
    .then((productsArray) => {
      order.addProduct(productsArray[0]);
      return order;
    });
  })
  .then((order) => {
    response.json(order);
  })
  .catch(next);
});

// Orders PUT
// For MVP, we will not provide the ability to update an order after it is submitted

// Orders DELETE
// Request.body must have
// - orderNumber: is a string
customOrderRoutes.delete('/', function (request, response, next) {
  Order.destroy({
    where: {
      orderNumber: request.body.orderNumber
    }
  })
  .then((deleted) => {
    response.sendStatus(200);
  })
  .catch(next);
});

module.exports = customOrderRoutes;
