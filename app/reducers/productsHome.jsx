import axios from 'axios';

const GET_PRODUCTS = "GET_PRODUCTS";

export default function reducer(state, action) {
  const newState = Object.assign({}, state);
  switch(action.type) {
    case GET_PRODUCTS:
      newState.products =  action.products;
      break;
    default:
      return state;
  }
  return newState;
}
