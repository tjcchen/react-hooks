/**
 * Custom useLocalStorage hook
 */
import { useState, useDebugValue, useEffect } from "react";

function getSavedValue(key, initialValue) {
  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue) {
    return savedValue;
  }

  if (initialValue instanceof Function) {
    return initialValue();
  } else {
    return initialValue;
  }
}

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  // set localStorage value whenever the value changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  // useDebugValue(value);

  return [value, setValue];
}
