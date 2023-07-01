import React, { useState } from "react";
import "./App.css";

function App() {
  // Please note that if we pass a function to the useState, this function only execute once only.
  // Try not to refer a global function.
  // const [count, setCount] = useState(() => {
  //   console.log("init count");
  //   return 4;
  // });

  // 1. update a simple value
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("blue");

  // 2. update an object value
  // please try to avoid this multiple props object state, use multiple separate states instead
  const [state, setState] = useState({ number: 4, theme: "blue" });
  const { number, theme } = state; // desturcture the state

  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
    setColor("red");
  };

  const decrementNumber = () => {
    setState((prevState) => {
      return {
        ...prevState, // keep the "theme" property untouchable
        number: prevState.number - 1, // only modify the prop you want to change
      };
    });
  };

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{color}</span>
      <button onClick={incrementCount}>+</button>
      <br />
      <button onClick={decrementNumber}>-</button>
      <span>{number}</span>
      <span>{theme}</span>
      <button>+</button>
    </>
  );
}

export default App;
