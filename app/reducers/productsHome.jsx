import axios from 'axios';

const GET_PRODUCTS = "GET_PRODUCTS";

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
    default:
      return state;
  }
  return newState;
};

export const setProductsOnBrowser = (products) => ({
  type: GET_PRODUCTS,
  products
});

// export function setProductsOnBrowser(products) {
//   type: GET_PRODUCTS,
//   products
// };

export function getProducts() {
  return (dispatch) => {
    return axios.get(`/api/products`)
    .then((results) => {
      console.log(results.data);
      dispatch(setProductsOnBrowser(results.data));
    });
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
