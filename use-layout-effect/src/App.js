/**
 * useLayoutEffect Hook
 */
import React, { useState, useEffect, useLayoutEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  // useEffect is asynchronous, it would not affect the main UI updating
  useEffect(() => {
    console.log('async', count);
  }, [count]);

  // useEffect is synchronous - do something based on your layout of your DOM
  // visible to the users
  useLayoutEffect(() => {
    console.log('sync', count);
  }, [count]);

  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <div>{count}</div>
    </>
  );
}

export default App;
