import React, { Component } from 'react';
import axios from 'axios'

import {UPDATE_CART, ADD_TO_CART, PURCHASE} from '../constants.js';

//action creator
const shoppingCart= (arr) => ({
  type: UPDATE_CART,
  payload: arr
})

const addToCart_action = (obj) => ({
	type: ADD_TO_CART,
	payload: obj
})

//defining dispatch action to define value of action-creator (also to be called by component)
export const deleteFromCart = (arr) => {
  return (dispatch) => {
    dispatch(shoppingCart(arr))
  }
    
}

export const purchase = (arr) => {
  return (dispatch) => {
    dispatch(purchasedItems(arr))
  } 
}

export const addToCart = (obj) => {
  return (dispatch) => {
    dispatch(addToCart_action(obj))
  } 
}




//initializing state
const initialState= {
  // shoppingCart: []

shoppingCart: [
{giveImage: "/dj-default.png",
id: 1,
artistName: "Big Boi",
description: "Fat jams all day",
price: 104,
image: null,
genre: "RAP",
location: "NYC",
email: "bigboi@money.com",
audioSample: null,
rating: null,
quantity: 1

},

{giveImage: "/dj-default.png",
id: 2,
artistName: "yo",
description: "Fat jams all day",
price: 104,
image: null,
genre: "RAP",
location: "NYC",
email: "bigboi@money.com",
audioSample: null,
rating: null,
quantity: 1

}


]

};


//defining reducer based on action-creator
export default function (state = initialState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case UPDATE_CART:
      newState.shoppingCart = action.payload;
      break;

    case PURCHASE:
      newState.shoppingCart = action.payload;
      break;

    case ADD_TO_CART:
      newState.shoppingCart = newState.shoppingCart.push(action.payload);
      break;
      

    default:
      return state;

  }
  return newState;

}