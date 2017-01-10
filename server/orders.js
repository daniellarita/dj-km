'use strict'

const epilogue = require('./epilogue');
const db = require('APP/db');
const { OrderProduct, Order, Product, User } = require('APP/db/models');
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
// - quantity should be on the body (quantity must be an integer because the model schema demands it!)
// it doesn't make sense to handle quantity on the post route now that I think about it because we don't want the user to be able to 'submit' the order if we are out of stock. The whole point of having the quantity column is to validate whether we can approve the purchase.  So we have to validate quantity on 'state' and throw a front end warning/block as well as disable the submit button. Check the product table for the instance method I wrote - that instance method should be called before post route is hit. This being said we have to somehow handle the post route for security purposes --> if someone hacks the api and submits an order for stock that isn't available how do we handle?

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
      .then(data => {
        OrderProduct.update(
          {quantity: request.body.quantity},
          {
            where: {order_id: order.id}
          })
      })

    })
  .then(response.sendStatus(200))
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
