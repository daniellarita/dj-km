import React, { Component } from 'react';
import { connect } from 'react-redux';
import Account from '../components/Account';
import { getProduct } from '../reducers/reviews.jsx';

const mapStateToProps = state => {
  return {
      user: state.auth
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProduct (prodId) {
      dispatch(getProduct(prodId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  // class extends React.Component{
  //   constructor(){
  //     super();
  //     this.state={
  //
  //     }
  //   }
  // }
  Account
);
