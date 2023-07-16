/**
 * Custom useWindowSize Hook
 */
import { useState } from "react";
import useEventListener from "../useEventListener/useEventListener";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEventListener("resize", () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  });

  return windowSize;
};

export default useWindowSize;
