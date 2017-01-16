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
// )(ProductsHome);
)(class extends React.Component {

  constructor (props) {
    super(props);
    this.state = { currIndex: 3 };
    this.loadMore = this.loadMore.bind(this);
  }

  loadMore(event) {
    event.preventDefault();
    let newIndex = this.state.currIndex + 3;
    this.setState({currIndex: newIndex})
  }

  render () {
    return (
      <ProductsHome
        {...this.state}
        {...this.props}
        loadMore={this.loadMore}
      />
    );
  }
});
