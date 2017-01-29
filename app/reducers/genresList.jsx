import axios from 'axios';
import store from '../store.jsx';

export const GET_GENRES = "GET_GENRES";

export function setGenres() {
  return {
    type: GET_GENRES,
    genresList: ['ELECTRONIC', 'RAP', 'FUNK', 'HIP-HOP']
  };
}

export default function reducer(state={}, action) {
  const newState = Object.assign({}, state);
  switch(action.type) {
    case GET_GENRES:
      newState.genresList = action.genresList;
      break;
    default:
      return state;
  }
  return newState;
}
