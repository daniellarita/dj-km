import React from 'react';
import { connect } from 'react-redux';
import { getProducts, setSelected } from '../reducers/productsHome.jsx';
import ProductsHome from '../components/ProductsHome.jsx';

function mapStateToProps (state) {
  return {
    products: state.products,
    product: state.selected
  };
};

function mapDispatchToProps (dispatch) {
  return {
    receiveProducts () {
      dispatch(getProducts());
    },
    selectProduct (prod) {
      dispatch(setSelected(prod));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsHome);
