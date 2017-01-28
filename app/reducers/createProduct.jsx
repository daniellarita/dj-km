// Action Type
const CREATE_PRODUCT = "CREATE_PRODUCT";

// Action Creator
export function addProductOnBrowser(newProduct) {
  return {
    type: CREATE_PRODUCT,
    newProduct: newProduct
  };
}

export function postProduct(newProduct) {

  return function(dispatch, getState) {
    dispatch(addProductOnBrowser());
    console.log(getState());
    // axios.post('/api/products', {})
    // .then((response) => {
    //
    //   console.log(response);
    // });
  };
}

const initialState = {
  newProduct: {}
};

// Reducer
export default function reducer(state = initialState, action) {
  const newState = Object.assign({}, state);
  switch(action.type) {
    case CREATE_PRODUCT:
      newState.newProduct = action.newProduct;
      break;
    default:
      return state;
  }
  return newState;
}
