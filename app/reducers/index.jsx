
import { combineReducers } from 'redux';
import ShoppingCart_reducer from './ShoppingCart_reducer';

const rootReducer = combineReducers({
  auth: require('./auth').default,
  searchfilter: require('./searchfilter').default,
  products: require('./productsHome.jsx').default,
  shoppingCart: ShoppingCart_reducer,
  newProduct: require('./createProduct.jsx').default
});

export default rootReducer;
