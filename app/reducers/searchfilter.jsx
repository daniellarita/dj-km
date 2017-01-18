import axios from 'axios'

const initialState = {
    name: -1,
    min: -1,
    max: -1,
    location: "San Francisco",
    genres: -1,
    rating: -1
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
