import axios from 'axios';
import store from '../store.jsx';

export const GET_LOCATIONS = "GET_LOCATIONS";

export function setLocations() {
  return {
    type: GET_LOCATIONS,
    locationsList: ['NYC', 'San Francisco', 'Chicago', 'Miami']
  };
}

export default function reducer(state={}, action) {
  const newState = Object.assign({}, state);
  switch(action.type) {
    case GET_LOCATIONS:
      newState.locationsList = action.locationsList;
      break;
    default:
      return state;
  }
  return newState;
}
