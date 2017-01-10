const Sequelize = require('sequelize')
const db = require('APP/db')

const crypto = require('crypto');


const Order = db.define('orders', {
  orderNumber: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  deliveryAddress: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  grandTotal: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
},

{
  hooks: {
    beforeValidate: function(order) {
      order.orderNumber = crypto.randomBytes(5).toString('hex').toUpperCase();
    }
  },

  getterMethods: {

  },

  instanceMethods: {

  }
});

module.exports = Order;
