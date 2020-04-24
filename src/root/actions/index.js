import {
  INCREMENT_IF_ODD,
  INCREMENT,
  FETCH_USER,
  FETCH_USER_FULFILLED
} from "../../constants";

export const increment = () => ({ type: INCREMENT });
export const incrementIfOdd = () => ({ type: INCREMENT_IF_ODD });
export const fetchUser = username => ({ type: FETCH_USER, payload: username });
export const fetchUserFulfilled = payload => ({
  type: FETCH_USER_FULFILLED,
  payload
});
