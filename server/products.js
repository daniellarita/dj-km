'use strict'

const epilogue = require('./epilogue');
const db = require('APP/db');
const { Product } = require('APP/db/models');
const customProductsRoutes = require('express').Router();

// Custom routes go here.
customProductsRoutes.get('/', function (request, response, next) {
  Product.findAll({})
  .then((djArray) => {
    let result;
    result = djArray.map((dj) => {
       dj.giveImage;
    });
    response.json(djArray);
  })
  .catch(next);
});


module.exports = customProductsRoutes

// Epilogue will automatically create standard RESTful routes
// const products = epilogue.resource({
//   model: db.model('products'),
//   endpoints: ['/products', '/products/:id']
// })

// const {mustBeLoggedIn, selfOnly, forbidden} = epilogue.filters
// users.delete.auth(mustBeLoggedIn)
// users.delete.auth(selfOnly('delete'))
// users.list.auth(forbidden('cannot list users'))
// users.read.auth(mustBeLoggedIn)
