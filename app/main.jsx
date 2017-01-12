'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
// import Jokes from './components/Jokes'
import App from './components/App';
import ProductDetailContainer from './containers/ProductDetailContainer';

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="/product" component={ProductDetailContainer} />
    </Router>
  </Provider>,
  document.getElementById('main')
)
