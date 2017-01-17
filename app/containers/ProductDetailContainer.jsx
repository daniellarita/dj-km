import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductDetail from '../components/ProductDetail';
import{addToCart} from '../reducers/ShoppingCart_reducer.jsx'

const mapStateToProps = state => {
  return {
      user: state.auth
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  	 addToCart_func(obj) {
      dispatch(addToCart(obj));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail);
