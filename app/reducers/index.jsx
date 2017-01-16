
import { combineReducers } from 'redux';
import ShoppingCart_reducer from './ShoppingCart_reducer';

const rootReducer = combineReducers({
  auth: require('./auth').default,
  products: require('./productsHome.jsx').default,
  shoppingCart: ShoppingCart_reducer

})

export default rootReducer;
