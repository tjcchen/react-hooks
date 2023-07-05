/**
 * useDeferredValue Hook - similar to debounce and throttling
 */
import { useState } from "react";
import List from "./List";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e.target.value);
  }

  return (
    <>
      <input type="text" value={input} onChange={handleChange} />{" "}
      <List input={input} />{" "}
    </>
  );
}

export default App;
