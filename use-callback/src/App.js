/**
 * useCallback Hook
 * 
 * useCallback vs useMemo:
 * The main difference between useCallback and useMemo is the type of value they return.
 * useCallback returns a memoized callback function, while useMemo returns a memoized value.
 * 
 */
import React, { useState, useCallback } from "react";
import "./App.css";
import List from "./List";

function App() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  // useCallback function can make sure the function only be invoked when number changes
  // [important] useCallback returns the whole function, while useMemo just returns the value
  const getItems = useCallback(
    (incrementor) => {
      // return [number, number + 1, number + 2];
      return [
        number + incrementor,
        number + 1 + incrementor,
        number + 2 + incrementor,
      ];
    },
    [number]
  );

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  };

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Toggle Theme
      </button>
      <List getItems={getItems} />
    </div>
  );
}

export default App;
