/**
 * Custom useDarkMode Hook
 * 
 * The nullish coalescing (??) operator is a logical operator that returns its
 * right-hand side operand when its left-hand side operand is null or undefined,
 * and otherwise returns its left-hand side operand.
 */
import { useEffect } from "react";
import { useLocalStorage } from "../useStorage/useStorage";
import useMediaQuery from "../useMediaQuery/useMediaQuery";

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("useDarkMode");
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  // if darkMode exists, then we use darkMode, otherwise we fall back to prefersDarkMode 
  const enabled = darkMode ?? prefersDarkMode;

  useEffect(() => {
    document.body.classList.toggle("dark-mode", enabled);
  }, [enabled]);

  return [enabled, setDarkMode];
};

export default useDarkMode;
