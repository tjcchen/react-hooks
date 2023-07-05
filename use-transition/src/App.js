/**
 * useTransition Hook - use it for performance improvement
 *
 * Explanation: The useTransition hook allows us to specify some state updates as not as important.
 * These state updates will be executed in parallel with other state updates,
 * but the rendering of the component will not wait for these less important state updates.
 *
 */
import React, { useState, useTransition } from "react";
import "./App.css";

function App() {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const LIST_SIZE = 20000;

  function handleChange(e) {
    // higher priority
    setInput(e.target.value);
    // lower priority, will be displayed/updated later
    // one drawback of startTransition is that it will cause the UI to rerender multiple times,
    // separating from the main UI update.
    // Give it more consideration when you are planning to use it.
    startTransition(() => {
      const l = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        l.push(e.target.value);
      }
      setList(l);
    });
  }

  return (
    <>
      <input type="text" value={input} onChange={handleChange} />
      {isPending ? (
        <div>Loading...</div>
      ) : (
        list.map((item, index) => <div key={index}>{item}</div>)
      )}
    </>
  );
}

export default App;
