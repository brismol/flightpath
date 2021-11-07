/**
 * ACTION TYPES
 */
const ADDED_FLIGHT = 'ADDED_FLIGHT';
const REMOVED_FLIGHT = 'REMOVED_FLIGHT';

/**
 * ACTION CREATORS
 */
const addedFlight = (flight) => ({ type: ADDED_FLIGHT, flight });
const removedFlight = () => ({ type: REMOVED_FLIGHT });

/**
 * THUNK CREATORS
 */
export const addFlight = (flight) => {
  return async (dispatch) => {
    dispatch(addedFlight(flight));
  };
};

export const removeFlight = () => {
  return async (dispatch) => {
    dispatch(removedFlight());
  };
};

/**
 * REDUCER
 */
export default function (state = [], action) {
  switch (action.type) {
    case ADDED_FLIGHT:
      return [...state, action.flight];
    case REMOVED_FLIGHT:
      return [...state].slice(0, state.length - 1);
    default:
      return state;
  }
}
