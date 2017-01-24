import React, { Component } from 'react';
import { connect } from 'react-redux';
import CreateProduct from '../components/CreateProduct.jsx';
import {postProduct} from '../reducers/createProduct.jsx';

const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submit: function(event) {
      event.preventDefault();
      dispatch(postProduct());
    }

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProduct);
