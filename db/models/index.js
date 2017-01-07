'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user');
const Product = require('./product');
const Review = require('./review');
const Order = require('./order');

// Product and Review
Product.hasMany(Review);
Review.belongsTo(Product);

// User and Review
User.hasMany(Review);
Review.belongsTo(User);

// User and Order
User.hasMany(Order);
Order.belongsTo(User);

// Product and Order
Order.hasMany(Product);
Product.belongsTo(Order);

module.exports = {
  User,
  Product,
  Review,
  Order
};
