import React, { Component } from 'react';
import { connect } from 'react-redux';
import Account from '../components/Account';

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
)(Account);
