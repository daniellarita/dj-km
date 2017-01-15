import axios from 'axios';

const GETPRODUCTS = "GETPRODUCTS";

export default function reducer(state, action) {
  const newState = Object.assign({}, state, {});
  switch(action.type) {
    case GETPRODUCTS:
      newState =  action.products;
    default:
      return state;
  }
}
