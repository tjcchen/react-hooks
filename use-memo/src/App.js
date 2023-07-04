/**
 * useMemo Hook - memoization
 * explanation: it is used to cache a value so we don't need to recompute it every single time
 * benefits: useMemo brings performance benefit, but be sure to use it when needed
 *
 * use cases:
 * 1. memo for a slow function
 * 2. memo for referential equality - object comparison
 *
 */
import React, { useState, useMemo, useEffect } from "react";

const slowFunction = (num) => {
  if (!num) {
    return 0;
  }
  console.log("Calling Slow Function");
  for (let i = 0; i < 10000; i++) {}
  return num * 2;
};

export default function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  // 1. slowFunction will be called every time the state is changed.
  // const doubleNumber = slowFunction(number);

  // 2. useMemo - if the number does not change, we don't need run this slowFunction
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  // 3. due to the referential equality issue, we need to use useMemo as well
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  // after using useMemo for themeStyles, this function will be called only when
  // themeStyles changed
  useEffect(() => {
    console.log("theme changed");
  }, [themeStyles]);

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
}
