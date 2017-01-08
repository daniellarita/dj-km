const Sequelize = require('sequelize')
const db = require('APP/db')

const Order = db.define('orders', {
  orderNumber: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  }
},

{
  getterMethods: {
    // getListOfProducts: function() {
    //   return this.getProducts()
    //   .then((products) => {
    //     console.log(products);
    //   })
    //   .catch(console.log);
    // }
  },

  instanceMethods: {

  }
});

module.exports = Order;
