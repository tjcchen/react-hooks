import React, { useState, createContext } from "react";
import FunctionContextComponent from "./FunctionContextComponent";
import ClassContextComponent from "./ClassContextComponent";
import { ThemeProvider } from "./ThemeContext";
import "./App.css";

// export the ThemeContext, then we can use it in our entire application
export const ThemeContext = React.createContext();

export default function App() {
  return (
    <>
      {/* 1. traditional way */}
      {/* <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <FunctionContextComponent />
        <ClassContextComponent />
      </ThemeContext.Provider> */}

      {/* 2. concise way */}
      <ThemeProvider>
        <FunctionContextComponent />
      </ThemeProvider>
    </>
  );
}
