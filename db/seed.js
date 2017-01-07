const db = require('APP/db')

const seedUsers = () => db.Promise.map([
  {name: 'so many', email: 'god@example.com', password: '1234'},
  {name: 'Barack Obama', email: 'barack@example.gov', password: '1234'},
], user => db.model('users').create(user))

const seedProducts = () => db.Promise.map([
  {artistName: 'DJ GET MONEY$', description: 'A HOT DJ WITH MONEY', price: '100.00',genre:'FUNK',email:'email@money.com'},
  {artistName: 'Big Boi', description: 'Fat jams all day', price: '104.00',genre:'RAP',email:'bigboi@money.com'}
], product => db.model('products').create(product))


const seedReviews = () => db.Promise.map([
  {text: 'This movie brought me', rating: '5', product_id: '1'},
  {text: 'and also good for!', rating: '1', product_id: '1'}], review => db.model('reviews').create(review))


db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedProducts)
  .then(products => console.log(`Seeded ${products.length} products OK`))
  .then(seedReviews)
  .then(reviews => console.log(`Seeded ${reviews.length} reviews OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())
