import { createSelector } from "reselect";

export const counterSelector = createSelector(
  state => state.reducer,
  reducer => reducer.counter
);

export const userSelector = createSelector(
  state => state.reducer,
  reducer => reducer.userData
);
