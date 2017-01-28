import React from 'react';
import { connect } from 'react-redux';
import { getProducts, setSelected } from '../reducers/productsHome.jsx';
import ProductsHome from '../components/ProductsHome.jsx';
import{addToCart} from '../reducers/ShoppingCart_reducer.jsx'

function mapStateToProps (state) {
  return {
    products: state.products,
    product: state.selected
  };
};

function mapDispatchToProps (dispatch) {
  return {
    selectProduct (prod) {
      dispatch(setSelected(prod));
    },
    addToCart_func(obj) {
      dispatch(addToCart(obj));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(class extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      currIndex: 3,
      scroll: true
    };
    this.loadMore = this.loadMore.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      if ((window.innerHeight + window.scrollY) === document.body.offsetHeight + 95 && this.state.scroll) {
        this.infiniteScroll();
      }
      // console.log("hey", document.body.scrollTop, window.innerHeight+window.scrollY, document.body.offsetHeight);
    })
  }

  infiniteScroll() {
    let newIndex = this.state.currIndex + 3;
    this.setState({currIndex: newIndex, scroll: false});
    setTimeout(() => { this.setState({scroll: true}) }, 500);
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
