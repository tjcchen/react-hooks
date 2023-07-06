/**
 * useDebugValue Hook
 */
import React, { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useLocalStorage("firstName", "Andy");
  const [lastName, setLastName] = useState("Chen");

  return (
    <>
      First:{" "}
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <br />
      Last:{" "}
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
    </>
  );
}

export default App;
