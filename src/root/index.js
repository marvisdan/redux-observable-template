import { combineReducers } from "redux";
import { combineEpics } from "redux-observable";

import { reducer } from "./reducers";
import { incrementIfOddEpic, fetchUserEpic } from "./epics";
import { incrementIfOdd, fetchUser } from "./actions";
import { counterSelector, userSelector } from "./selectors";

export const rootEpic = combineEpics(incrementIfOddEpic, fetchUserEpic);
export const rootReducer = combineReducers({ reducer });

export { incrementIfOdd, fetchUser, counterSelector, userSelector };
