'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user')
const Product = require('./product')
const Review = require('./review')

Product.hasMany(Review)
User.hasMany(Review)

Review.belongsTo(Product)
// User.hasMany(Order)
// Order.hasMany(Product)
// Product.belongsTo(Order)

module.exports = { User, Product, Review }
