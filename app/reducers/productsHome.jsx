import axios from 'axios';

const GET_PRODUCTS = "GET_PRODUCTS";
const SELECT_PRODUCT="SELECT_PRODUCT";

const initialProductsState = {
  selected: {},
  products: []
};

export default function reducer(state=initialProductsState, action) {
  const newState = Object.assign({}, state);
  console.log(action, "in reducer")
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
  selected:product
});

export function getProducts() {
  return (dispatch) => {
    return axios.get(`/api/products`)
    .then((results) => {
      console.log(results.data);
      dispatch(setProductsOnBrowser(results.data));
    });
  };
};

export function setSelected(prod) {
  console.log("clicked button", prod)
  return (dispatch) => {
    dispatch(selectProduct(prod));
  };
};

// export const setLyrics = text => ({
//   type: SET_LYRICS,
//   text
// });

// export const searchLyrics = (artist, song) => {
//   return dispatch => {
//     return axios.get(`/api/lyrics/${artist}/${song}`)
//       .then(res => {
//         dispatch(setLyrics(res.data.lyric));
//       });
//   };
// };
