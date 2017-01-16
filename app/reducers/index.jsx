import { combineReducers } from 'redux'
import ShoppingCart_reducer from './ShoppingCart_reducer';


const rootReducer = combineReducers({
  auth: require('./auth').default,  
  shoppingCart: ShoppingCart_reducer
})

export default rootReducer
