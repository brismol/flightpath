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
export const getFlights = (offset = 0, rotation, filter) => {
  //I think I have to store offset in state
  return async (dispatch) => {
    let flights = [];
    if (filter && rotation.length > 0) {
      const lastFlight = rotation[rotation.length - 1];
      while (flights.length < 25 && offset < 1323) {
        const res = await axios.get(
          'https://infinite-dawn-93085.herokuapp.com/flights',
          { params: { offset: offset, limit: 25 } }
        );
        flights = [
          ...flights,
          ...res.data.data.filter((flight) => {
            return (
              lastFlight.destination === flight.origin &&
              flight.departuretime >= lastFlight.arrivaltime + 1200
            );
          }),
        ];
      }
    } else {
      const res = await axios.get(
        'https://infinite-dawn-93085.herokuapp.com/flights',
        { params: { offset: offset, limit: 25 } }
      );
      flights = [...flights, ...res.data.data];
    }

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
