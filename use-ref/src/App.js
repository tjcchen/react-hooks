/**
 * useRef does not cause your component to reupdate when it gets changed
 * 
 * use cases of useRef():
 * 1. UI update counter
 * 2. refer to a html dom element, such as input, textarea
 * 3. store the previous value of your state
 * 
 */
import React, { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const renderCount = useRef(1); // { current: 1 }
  const inputRef = useRef();
  const prevName = useRef("");

  // [NOTE] this will cause infinite loop, since UI is updated by {renderCount}
  // this useEffect will be invoked once again.
  // const [renderCount, setRenderCount] = useState(0);
  // useEffect(() => {
  //   setRenderCount(prevRenderCount => prevRenderCount + 1)
  // });

  // UI update counter
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  // store the previous value of your state
  useEffect(() => {
    prevName.current = name;
  }, [name]);

  // refer to an html element with useRef
  const focus = () => {
    inputRef.current.focus();
    // ref will not update value, just update it's UI renders
    // inputRef.current.value = "Some value";
  };

  return (
    <>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        My name is "{name}" and it used to be "{prevName.current}"
      </div>
      {/* correct way: implemented with useRef */}
      <div>I rendered {renderCount.current} times</div>
      <button onClick={focus}>focus</button>
    </>
  );
}

export default App;
