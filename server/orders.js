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
// - productIds: is an ARRAY of product ids (ids are strings)
customOrderRoutes.post('/', function (request, response, next) {
  Order.create({
    user_id: request.body.user_id
  })
  .then((order) => {
    Product.findAll({
      where: {
        id: request.body.productIds
      }
    })
    .then((productsArray) => {
      return order.setProducts(productsArray)
      ;
    })
    .then(order => {
      Orderproduct.update(
        {
          quantity: request.body.quantity
        },

        {
          where: {
          id: order.id
          }
        }
      )
    })
    .then((updatedOrder) => {
      response.sendStatus(200);
      // response.json(updatedOrder);
    });
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
