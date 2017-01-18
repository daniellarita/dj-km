'use strict'
const Sequelize = require('sequelize');

const epilogue = require('./epilogue');
const db = require('APP/db');
const { Product } = require('APP/db/models');
const customProductsRoutes = require('express').Router();

// Custom routes go here.
customProductsRoutes.get('/', function (request, response, next) {
  Product.findAll({})
  .then((djArray) => {
    let result;
    result = djArray.map((dj) => {
       dj.giveImage;
    });
    response.json(djArray);
  })
  .catch(next);
});

customProductsRoutes.get('/:productId', function(request,response,next){
  Product.findOne({
    where:{
      id:request.params.productId
    }
  })
  .then((product)=>{
    response.status(200).json(product)
  })
  .catch(next);
})

customProductsRoutes.get('/all/locations', function (request, response, next) {

    Product.aggregate('location', 'DISTINCT', { plain: false })
    .then(arrayOfResults => {
      response.json(arrayOfResults);
    });
  });

customProductsRoutes.post('/', function(request,response,next){
  const dj={
    artistName:request.body.artistName,
    description:request.body.description,
    price:request.body.price,
    image:request.body.image,
    genre:request.body.genre,
    location:request.body.location,
    email:request.body.email,
    audioSample:request.body.audioSample,
    rating:request.body.rating,
    quantity:request.body.quantity
  }

  Product.findOrCreate({
    where:dj
  })
  .then(dj=>response.json(dj))
  .catch(next);
})

customProductsRoutes.put('/:productId', function(request, response,next){
  const req=request.body?request.body:{};
  console.log(req)
  Product.update(
    req,
    {where:{
      id:parseInt(request.params.productId)
    }
  })
  .then(res=>{
    Product.findOne({ where:{id:request.params.productId}}).
    then(res=>{
      response.json(res)
    })
  })
  .catch(next);
})

customProductsRoutes.delete('/:productId',function(request,response,next){
  Product.destroy({
    where:{id:request.params.productId}
  })
  .then(response.sendStatus(200))
  .catch(next);
})

module.exports = customProductsRoutes

// Epilogue will automatically create standard RESTful routes
// const products = epilogue.resource({
//   model: db.model('products'),
//   endpoints: ['/products', '/products/:id']
// })

// const {mustBeLoggedIn, selfOnly, forbidden} = epilogue.filters
// users.delete.auth(mustBeLoggedIn)
// users.delete.auth(selfOnly('delete'))
// users.list.auth(forbidden('cannot list users'))
// users.read.auth(mustBeLoggedIn)
