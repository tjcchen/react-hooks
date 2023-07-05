/**
 * useReducer Hook
 *
 * Explanation: useReducer provides more complex logic than useState.
 * It allows you to handle multiple actions within a single function rather than
 * writing separate functions for each action with useState.
 *
 */
import React, { useReducer } from "react";
import "./App.css";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

/**
 * reducer function
 *
 * @state | current state
 * @action | actions
 */
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state; // doing nothing, return the current state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const increment = () => {
    dispatch({ type: ACTIONS.INCREMENT });
  };

  const decrement = () => {
    dispatch({ type: ACTIONS.DECREMENT });
  };

  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </>
  );
}

export default App;
