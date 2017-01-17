import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: require('./auth').default,
  product: require('./product').default,
  searchfilter: require('./searchfilter').default,
});

export default rootReducer;
