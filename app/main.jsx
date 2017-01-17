'use strict'
import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';

import store from './store';

// import Jokes from './components/Jokes'
import App from './components/App';

import ShoppingCart from './components/ShoppingCart'

import ProductDetailContainer from './containers/ProductDetailContainer.jsx';
import ProductsHomeContainer from './containers/ProductsHomeContainer.jsx';
import AccountContainer from './containers/AccountContainer.jsx';



render(
  <Provider store={store}>
    <Router history={browserHistory}>

      <Route path="/" component={App} >
        <Route path="/products" component={ProductsHomeContainer} />
        <Route path="/products/:pId" component={ProductDetailContainer} />
        <IndexRedirect to='/products' />
        <Route path='/ShoppingCart' component={ShoppingCart} />
        <Route path='/account' component={AccountContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
);
