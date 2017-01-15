import React from 'react';
import { connect } from 'react-redux';
import { getProducts, setSelected } from '../reducers/productsHome.jsx';
import ProductsHome from '../components/ProductsHome.jsx';

function mapStateToProps (state) {
  console.log(state)
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
      console.log(prod, "inside select product")
      dispatch(setSelected(prod));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsHome);

// (class extends Component {
//
//   constructor (props) {
//     super(props);
//     this.state = { artistQuery: '', songQuery: '' };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//
//   handleChange (type, value) {
//     this.setState({ [`${type}Query`]: value });
//   }
//
//   handleSubmit (evt) {
//     evt.preventDefault();
//     if (this.state.artistQuery && this.state.songQuery)
//       this.props.searchLyrics(this.state)
//   }
//
//   render () {
//     return (
//       <Lyrics
//         {...this.state}
//         {...this.props}
//         handleChange={this.handleChange}
//         handleSubmit={this.handleSubmit}
//       />
//     );
//   }
// });
