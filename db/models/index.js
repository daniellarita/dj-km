'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user');
const Product = require('./product');
const Review = require('./review');
const Order = require('./order');

// Product <--> Review
Product.hasMany(Review);
Review.belongsTo(Product);


// User <--> Review
User.hasMany(Review);
Review.belongsTo(User);


// User <--> Order
// User.hasMany(Order);
// Order.belongsTo(User);

// Product <--> Order
Order.belongsToMany(Product, {through: 'orderproduct'});
Product.belongsToMany(Order, {through: 'orderproduct'});

module.exports = {
  User,
  Product,
  Review,
  Order
};
