import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductDetail from '../components/ProductDetail';

const mapStateToProps = state => {
  return {
      user: state.auth
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail);
