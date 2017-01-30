import axios from 'axios';
import store from '../store.jsx';

const GET_PRODUCT = "GET_PRODUCT";

const initialState = {
  selectedProduct: {}
};

export default function reducer(state=initialState, action) {
  const newState = Object.assign({}, state);
  switch(action.type) {
    case GET_PRODUCT:
      newState.selectedProduct = action.selectedProduct;
      break;
    default:
      return state;
  }
  return newState;
};

export const setProduct = (selectedProduct) => ({
  type: GET_PRODUCT,
  selectedProduct: selectedProduct
});

export function getProduct(prodId) {
  return (dispatch) => {
    return axios.get(`/api/products/${prodId}`)
    .then((result) => {
      dispatch(setProduct(result.data));
    });
  };
};
