const SELECT_PRODUCT = 'SELECT_PRODUCT';

const reducer = (state=null, action) => {
  switch(action.type) {
  case SELECT_PRODUCT:
    return action.product;
  }
  return state;
}

export const selectProduct = product => ({
  type: SELECT_PRODUCT, product
})

export const getProduct = ( productId ) =>
  dispatch =>
    axios.get('/api/products/:productId', {productId})
    .then((response) => console.log(response.data))


export const login = (username, password) =>
  dispatch =>
    axios.post('/api/auth/local/login',
      {username, password})
      .then(() => dispatch(whoami()))
      .catch(() => dispatch(whoami()))

export const logout = () =>
  dispatch =>
    axios.post('/api/auth/logout')
      .then(() => dispatch(whoami()))
      .catch(() => dispatch(whoami()))

export const whoami = () =>
  dispatch =>
    axios.get('/api/auth/whoami')
      .then(response => {
        const user = response.data
        dispatch(authenticated(user))
      })
      .catch(failed => dispatch(authenticated(null)))

export default reducer
