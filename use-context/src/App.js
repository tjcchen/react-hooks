import React, { useState, createContext } from "react";
import FunctionContextComponent from "./FunctionContextComponent";
import ClassContextComponent from "./ClassContextComponent";
import "./App.css";

// export the ThemeContext, then we can use it in our entire application
export const ThemeContext = createContext();

export default function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  };

  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <FunctionContextComponent />
        <ClassContextComponent />
      </ThemeContext.Provider>
    </>
  );
}
