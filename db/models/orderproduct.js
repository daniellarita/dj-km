const Sequelize = require('sequelize')
const db = require('APP/db')


const Orderproduct = db.define('order_products', {
	quantity:
		{
			type: Sequelize.INTEGER,
			defaultValue: 0
		}
  },

  {
  	instanceMethods: {

  	}
    
  }



  )

module.exports = Orderproduct;