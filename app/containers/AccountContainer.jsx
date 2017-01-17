import React, { Component } from 'react';
import { connect } from 'react-redux';
import Account from '../components/Account';

const mapStateToProps = state => {
  return {
      // selectedProduct: state.products.selected
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Account);
