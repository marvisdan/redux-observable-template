import produce from "immer";
import { INCREMENT, FETCH_USER_FULFILLED } from "../../constants";

const initialState = {
  counter: 0,
  userData: null
};

const increment = (state, payload) => {
  return produce(state, draft => ({
    ...draft,
    counter: draft.counter + 1
  }));
};

export const reduceFetchUser = (state, payload) => {
  return produce(state, draft => ({
    ...draft,
    userData: payload
  }));
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return increment(state, action.payload);
    case FETCH_USER_FULFILLED:
      return reduceFetchUser(state, action.payload);
    default:
      return state;
  }
};
