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

const purchasedItems = (ord) => ({
  type: PURCHASE,
  payload: ord
})

//defining dispatch action to define value of action-creator (also to be called by component)
export const deleteFromCart = (arr) => {
  return (dispatch) => {
    dispatch(shoppingCart(arr))
  }
    
}

export const purchase = (ord) => {
  return (dispatch) => {
    dispatch(purchasedItems(ord))
  } 
}

export const addToCart = (obj) => {
  return (dispatch) => {
    dispatch(addToCart_action(obj))
  } 
}




//initializing state
const initialState= {
  shoppingCart: [],
  order: {}
};


//defining reducer based on action-creator
export default function (state = initialState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case UPDATE_CART:
      newState.shoppingCart = action.payload;
      break;

    case PURCHASE:
      newState.order = action.payload;
      break;

    case ADD_TO_CART:
      // console.log(action.payload);
      newState.shoppingCart.push(action.payload);
      break;
      

    default:
      return state;

  }
  return newState;

}