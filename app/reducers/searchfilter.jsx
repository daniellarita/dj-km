import axios from 'axios'

const initialState = {
    name: "",
    min: 0,
    max: 0,
    location: "",
    genres: [],
    rating: ""
}

const reducer = (state=initialState, action) => {
  switch(action.type) {
  case SEARCHFILTER:
    return action.searchfilter
  }
  return state
}

const SEARCHFILTER = 'SEARCHFILTER'
export const queryInfo = searchfilter => ({
  type: SEARCHFILTER, searchfilter
})



export default reducer
