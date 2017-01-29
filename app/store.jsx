import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import { whoami } from './reducers/auth';
import { getProducts } from './reducers/productsHome';
import { setGenres } from './reducers/genresList';
import { setLocations } from './reducers/locationList';

const store = createStore(rootReducer, applyMiddleware(createLogger(), thunkMiddleware));

export default store;

// Set the auth info at start
store.dispatch(whoami());
store.dispatch(getProducts());
store.dispatch(setGenres());
store.dispatch(setLocations());
