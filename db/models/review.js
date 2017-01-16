const Sequelize = require('sequelize')

const db = require('APP/db')

const Review = db.define('reviews', {

  text: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      minimumLength: function(text) {
      	if(text.length < 10) {
      		throw new Error("Review should be greater than 10 characters please");
      	}
      }
    }
  },
  rating: {
  	type: Sequelize.ENUM('1','2','3','4','5'),
    allowNull: false,
  	validate: {
  		notEmpty: true
  	}
  }
},
{
  hooks: {
    afterCreate: function(review){
   		return review.getProduct()
   		.then((res) => res.updateRating())
   		.catch(console.log)
        }
    }
});

module.exports = Review;
