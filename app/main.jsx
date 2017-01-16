'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
// import Jokes from './components/Jokes'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI';
import Products from './components/Products';
import NavBar from './components/NavBar';
import App from './components/App';
import ShoppingCart from './components/ShoppingCart'

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path='/ShoppingCart' component={ShoppingCart} />
    </Router>
  </Provider>,
  document.getElementById('main')
)
