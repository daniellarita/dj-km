'use strict'

const epilogue = require('./epilogue');
const db = require('APP/db');
const { Order, Product } = require('APP/db/models');
const customOrderRoutes = require('express').Router();

// Custom routes go here.
customOrderRoutes.get('/', function (request, response, next) {
  console.log('hey')
  Order.findAll({
    include: [{model: Product}]
  })
  .then((orderArray) => {
    console.log('hello');
    response.json(orderArray);
    // response.json("some string");
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
