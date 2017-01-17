
import { combineReducers } from 'redux';
import ShoppingCart_reducer from './ShoppingCart_reducer';

const rootReducer = combineReducers({
  auth: require('./auth').default,
<<<<<<< HEAD
  product: require('./product').default,
  searchfilter: require('./searchfilter').default,
});
=======
  products: require('./productsHome.jsx').default,
  shoppingCart: ShoppingCart_reducer

})
>>>>>>> 01f0c0f19e3fbb8dff6957986760f907e36dfce9

export default rootReducer;
