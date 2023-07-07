/**
 * useImperativeHandle hook
 * 
 * Case 1: pass ref to a custom component with React.forwardRef()
 * Case 2: define a custom function for ref element, such as inputRef.current.alertHi()
 * 
 */
import { useState, useRef } from "react";
import CustomInput from "./CustomInput";
import "./App.css";

function App() {
  const [value, setValue] = useState("red");
  const inputRef = useRef();

  return (
    <>
      <CustomInput
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <br />
      {/* use default React.forwardRef() */}
      {/* <button onClick={() => inputRef.current.focus()}>Focus</button> */}

      {/* useImperativeHandle custom function */}
      <button onClick={() => inputRef.current.alertHi()}>Focus</button>
    </>
  );
}

export default App;
