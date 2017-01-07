const Sequelize = require('sequelize')

const db = require('APP/db')

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
  email:{
    type:Sequelize.STRING,
    validate: {
      isEmail: true,
      notEmpty: true
    }
  },
  audioSample:{
    type:Sequelize.STRING
  }

},
{
  getterMethods:{
    getImage:function(){
      return !this.image ? '/public/dj-default.png' : this.image;
    }
  }
})

module.exports=Product;
