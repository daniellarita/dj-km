'use strict'

const epilogue = require('./epilogue');
const db = require('APP/db');
const { Review, Product, User } = require('APP/db/models');
const customReviewsRoutes = require('express').Router();

// Reviews GET
customReviewsRoutes.get('/', function (request, response, next) {
  Review.findAll({
    include: [Product, User]
  })
  .then((reviewArray) => {
    response.json(reviewArray);
  })
  .catch(next);
});

customReviewsRoutes.get('/:reviewId', function (request, response, next) {
  Review.findOne({
    include: [Product, User],
    where: {
      id: request.params.reviewId
    }
  })
  .then((review) => {
    response.json(review);
  })
  .catch(next);
});

// Reviews POST
// Request.body must have
// - text: text with minimum of 10 characters
// - rating: number (which is a string)
// - user_id: is an id (id is a string)
// - product_id: is an id (id is a string)
customReviewsRoutes.post('/', function (request, response, next) {
  Review.create({
    text: request.body.text,
    rating: request.body.rating,
    user_id: request.body.user_id,
    product_id: request.body.product_id
  })
  .then((review) => {
    response.sendStatus(200);
  })
  .catch(next);
});

// Reviews Update
customReviewsRoutes.put('/:reviewId', function (request, response, next) {
  Review.update(request.body, {
    where: {
      id: request.params.reviewId
    }
  })
  .then((updatedReview) => {
    response.sendStatus(200);
  })
  .catch(next);
});

// Review Delete
customReviewsRoutes.delete('/:reviewId', function (request, response, next) {
  Review.destroy({
    where: {
      id: request.params.reviewId
    }
  })
  .then((deleted) => {
    response.sendStatus(200);
  })
  .catch(next);
});



module.exports = customReviewsRoutes;

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
