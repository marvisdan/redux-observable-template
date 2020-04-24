import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { reactiveFunc, reactiveTimer } from "./logic";
import {
  counterSelector,
  userSelector,
  incrementIfOdd,
  fetchUser
} from "./root";

import "./styles.css";

const App = () => {
  const dispatch = useDispatch();
  const increment = useSelector(counterSelector);
  const user = useSelector(userSelector);

  useEffect(() => {
    /* Use directly rxjs observable in react inside a function */
    reactiveFunc();
    reactiveTimer();
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button
        onClick={() => {
          /* Use rxjs observable with redux flow */
          return dispatch(incrementIfOdd());
        }}
      >
        increment
      </button>
      <h3>increment: {increment}</h3>
      <button onClick={() => dispatch(fetchUser("toto"))}>fetch user</button>
      <div>${user && <pre>${JSON.stringify(user, null, 2)}</pre>}</div>
    </div>
  );
};

export default App;
