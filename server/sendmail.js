	'use strict'

const Router = require('express').Router()

const nodemailer = require('nodemailer')

// const transport = {
//     name: 'localhost:1337' // must be the same that can be reverse resolved by DNS for your IP 
// };

const transport = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL 
    auth: {
        user: 'djkm.team@gmail.com',
        pass: 'Fullst@ck'
    }
};

const transporter = nodemailer.createTransport(transport);

Router.post('/', function(req,res,next){


// console.log(req.body.products[0].artistName)

var tempString = '';

         for (let i=0; i<req.body.products.length; i++){
    
           tempString += `<div> ${req.body.products[i].artistName} </div>` +
            `<div> ${req.body.products[i].giveImage} </div>`
         }
var introString = '<h1> Thank you for your purchase! </h1> <p> You have the following purchases: </p>'

var emailString = introString + tempString

    const mailOptions = {
    	from: 'djkm.team@gmail.com',
    	to: req.body.email,
    	subject: 'DJ KM Order ' + req.body.orderNumber,
    	// text: 'haye',
    	html:  emailString
    };

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});


})



// var mailOptions = {
//     from: '"Fred Foo 👥" <foo@blurdybloop.com>', // sender address 
//     to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers 
//     subject: 'Hello ✔', // Subject line 
//     text: 'Hello world 🐴', // plaintext body 
//     html: '<b>Hello world 🐴</b>' // html body 
// };


module.exports = Router;