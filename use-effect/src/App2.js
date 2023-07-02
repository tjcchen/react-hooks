/**
 * Monitor window resize event
 */
import React, { useState, useEffect } from "react";

const App2 = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => setWindowWidth(window.innerWidth);

  // onmount
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // remove event listener when useEffect hook is removed
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div>{windowWidth}</div>;
};

export default App2;
