import { ofType } from "redux-observable";
import { map, mergeMap } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

import { INCREMENT_IF_ODD, FETCH_USER } from "../../constants";
import { increment, fetchUserFulfilled } from "../actions";

export const incrementIfOddEpic = action$ =>
  action$.pipe(
    ofType(INCREMENT_IF_ODD),
    map(() => increment())
  );

export const fetchUserEpic = action$ =>
  action$.pipe(
    ofType(FETCH_USER),
    mergeMap(action =>
      ajax
        .getJSON(`https://api.github.com/users/${action.payload}`)
        .pipe(map(response => fetchUserFulfilled(response)))
    )
  );
