'use strict'

const epilogue = require('./epilogue');
const db = require('APP/db');
const { Product } = require('APP/db');
const customProductsRoutes = require('express').Router();

// Custom routes go here.
customProductsRoutes.get('/', function (request, response, next) {
  console.log("HEY");
  Product.findAll({})
  .then((djArray) => {
    djArray.map((dj) => {
      dj.getImage();
    });
    response.json(djArray);
  })
  .catch(next)
  .finally();
});


module.exports = customProductsRoutes

// Epilogue will automatically create standard RESTful routes
const products = epilogue.resource({
  model: db.model('products'),
  endpoints: ['/products', '/products/:id']
})

// const {mustBeLoggedIn, selfOnly, forbidden} = epilogue.filters
// users.delete.auth(mustBeLoggedIn)
// users.delete.auth(selfOnly('delete'))
// users.list.auth(forbidden('cannot list users'))
// users.read.auth(mustBeLoggedIn)
