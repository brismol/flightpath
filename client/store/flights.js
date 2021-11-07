import axios from 'axios';

/**
 * ACTION TYPES
 */
const FETCHED_FLIGHTS = 'FETCHED_FLIGHTS';

/**
 * ACTION CREATORS
 */
const fetchedFlights = (flights) => ({ type: FETCHED_FLIGHTS, flights });

/**
 * THUNK CREATORS
 */
export const getFlights = (offset) => {
  return async (dispatch) => {
    const res = await axios.get(
      'https://infinite-dawn-93085.herokuapp.com/flights',
      { params: { offset: offset, limit: 25 } }
    );
    const flights = res.data.data;
    dispatch(fetchedFlights(flights));
  };
};

/**
 * REDUCER
 */
export default function (state = [], action) {
  switch (action.type) {
    case FETCHED_FLIGHTS:
      return action.flights;
    default:
      return state;
  }
}
