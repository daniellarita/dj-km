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

// Orders GET :orderNumber
// Add Address, Total price

// --------------------------------------------------------------------------

// Orders POST
// Request.body must have
// - user_id: is an id (id is a string)
// - products: array of objects. Each object has
      // - pId (strings)
      // - quantity (strings)
      // - price (strings)

// Example Input:
// {
//   "deliveryAddress": "5 Hanover Square, New York, NY 10001",
//   "products": [
//     { "pId": "1", "quantity": "10", "price": "100" },
//     { "pId": "2", "quantity": "20", "price": "200"}
//     ],
//   "user_id": "2",
//   "quantity": ["10", "20"]
// }

customOrderRoutes.post('/', function (request, response, next) {

  const cartProducts = request.body.products;
  const cartProductIds = [];
  cartProducts.forEach((product) => {
    cartProductIds.push(product.pId);
  });

  Order.create({
    deliveryAddress: request.body.deliveryAddress,
    grandTotal: request.body
  })
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
          id: cartProductIds
        }
      })
      .then((productsArray) => {
        productsArray.forEach((prod) => {
          cartProducts.forEach((cartPr) => {
            if(prod.id.toString()===cartPr.pId.toString())
            order.addProduct(prod, {
              quantity: cartPr.quantity,
              price: cartPr.price,
              totalAmount: cartPr.quantity*cartPr.price
            });
          });
        });
        return order;
      });

  })
  .then((order) => {
      OrderProduct.findAll({
        // where: {
        //   order_id: order.id
        // }
      })
      .then((orderproductArray) => {
        response.json(orderproductArray);
      })
      .then(() => {
        order.grandTotal();
      });
      response.json(order);
  })
  .catch(next);
});

// --------------------------------------------------------------------------

// Orders PUT
// For MVP, we will not provide the ability to update an order after it is submitted

// --------------------------------------------------------------------------

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
