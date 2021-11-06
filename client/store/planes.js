import axios from 'axios';

/**
 * ACTION TYPES
 */
const FETCHED_PLANES = 'FETCHED_PLANES';

/**
 * ACTION CREATORS
 */
const fetchedPlanes = (planes) => ({ type: FETCHED_PLANES, planes });

/**
 * THUNK CREATORS
 */
export const getPlanes = () => {
  return async (dispatch) => {
    const res = await axios.get(
      'https://infinite-dawn-93085.herokuapp.com/aircrafts'
    );
    const planes = res.data.data;
    dispatch(fetchedPlanes(planes));
  };
};

/**
 * REDUCER
 */
export default function (state = [], action) {
  switch (action.type) {
    case FETCHED_PLANES:
      return action.planes;
    default:
      return state;
  }
}
