const Sequelize = require('sequelize')
const db = require('APP/db')
const { Review } = require('APP/db')

const Product = db.define('products', {
  artistName: {
    type:Sequelize.STRING,
    validate:{
      notEmpty:true
    }
  },

  description: {
    type:Sequelize.STRING
  },

  price: {
    type:Sequelize.FLOAT,
    validate:{
      notEmpty:true
    }
  },

  image: {
    type:Sequelize.STRING
  },

  genre:{
    type:Sequelize.ENUM('ELECTRONIC', 'RAP', 'FUNK', 'HIP-HOP'),
    validate:{
      notEmpty:true
    }
  },

  location:{
    type:Sequelize.ENUM('NYC', 'San Francisco', 'Chicago', 'Miami'),
    validate: {
      notEmpty:true
    }
  },

  email:{
    type:Sequelize.STRING,
    validate: {
      isEmail: true,
      notEmpty: true
    }
  },

  audioSample:{
    type:Sequelize.STRING
  },

  rating: {
    type:Sequelize.FLOAT
  },
  quantity:{
    type:Sequelize.INTEGER
  }
},

{
  getterMethods: {
    giveImage: function() {
      return !this.image ? '/dj-default.png' : this.image;
    }
  },

  instanceMethods: {
    updateRating: function() {
     return this.getReviews()

      .then(data => {
        let arr = data;
        let sum = 0;
        for(let i=0; i<arr.length; i++){
          sum += parseInt(arr[i].rating)
        }
        this.rating = sum / arr.length;
      })
      .catch(console.log);
    }
  }
});

module.exports = Product;
