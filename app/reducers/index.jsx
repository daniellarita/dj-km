
import { combineReducers } from 'redux';
import ShoppingCart_reducer from './ShoppingCart_reducer';

const rootReducer = combineReducers({
  auth: require('./auth').default,
  product: require('./product').default,
  searchfilter: require('./searchfilter').default,
  products: require('./productsHome.jsx').default,
  shoppingCart: ShoppingCart_reducer
});

export default rootReducer;
