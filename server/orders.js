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
      return order.setProducts(productsArray);
    })
    .then((updatedOrder) => {
      response.json(updatedOrder);
    });
  })
  .catch(next);
});

// Orders PUT
// For MVP, we will not provide the ability to update an order after it is submitted

//Orders DELETE
// Request.body must have
// - orderNumber: is a string
customOrderRoutes.delete('/', function (request, response, next) {
  Order.delete({
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

// Epilogue will automatically create standard RESTful routes
// const orders = epilogue.resource({
//   model: db.model('orders'),
//   endpoints: ['/orders', '/orders/:id']
// })

// const {mustBeLoggedIn, selfOnly, forbidden} = epilogue.filters
// users.delete.auth(mustBeLoggedIn)
// users.delete.auth(selfOnly('delete'))
// users.list.auth(forbidden('cannot list users'))
// users.read.auth(mustBeLoggedIn)
