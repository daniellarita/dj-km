import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: require('./auth').default,
  product: require('./product').default,
  products: require('./productsHome.jsx').default
})

export default rootReducer;
