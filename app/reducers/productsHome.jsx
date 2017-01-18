import axios from 'axios';
import store from '../store.jsx';

const GET_PRODUCTS = "GET_PRODUCTS";
const SELECT_PRODUCT="SELECT_PRODUCT";

const initialProductsState = {
  selected: {},
  products: []
};

export default function reducer(state=initialProductsState, action) {
  const newState = Object.assign({}, state);
  switch(action.type) {

    case GET_PRODUCTS:
      newState.products = action.products;
      break;
    case SELECT_PRODUCT:
      newState.selected = action.selected;
      break;
    default:
      return state;
  }
  return newState;
};

export const setProductsOnBrowser = (products) => ({
  type: GET_PRODUCTS,
  products
});

export const selectProduct = (product) => ({
  type: SELECT_PRODUCT,
  selected: product
});

export function getProducts() {
  console.log(store.getState());
  const searchFilter=store.getState().searchfilter;
  let queryString='?';

  for (var key in searchFilter){
    console.log("in for loop")
    if (searchFilter[key]!==-1){
      queryString+=key+'='+searchFilter[key];
      console.log(queryString);
    }
  }

  console.log("QUERY STRING",queryString);

  return (dispatch) => {
    return axios.get(`/api/products/search/filter`+queryString)
    .then((results) => {
      dispatch(setProductsOnBrowser(results.data));
    });
  };
};

export function setSelected(prod) {
  return (dispatch) => {
    dispatch(selectProduct(prod));
  };
};
