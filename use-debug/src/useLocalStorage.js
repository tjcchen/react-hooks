/**
 * useDebugValue Hook
 * 
 * things to know:
 * 1. useDebugValue only works in a custom hook
 * 2. if we use multiple useDebugValues, the components data will be transformed to array displaying
 * 3. do not push your useDebugValue code to production, it would affect app performance
 */
import { useState, useEffect, useCallback, useDebugValue } from "react";

const getValueSlowly = (value) => {
  for (let i = 0; i < 3000000; i++) {}
  return value;
};

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {});

  // useDebugValue([key, value]);

  // if we use multiple useDebugValues, the components data will be transformed to array.
  // the data would be something like: [key, value]
  // useDebugValue(key);
  // useDebugValue(value);

  // ["Hi", {key: "firstName", value: "sss"}]
  // useDebugValue("Hi");
  // useDebugValue({ key, value });

  // useDebugValue(getValueSlowly(value));

  // [function version] only run this code, when we are working with developer tools
  // it will not be running in your production env
  // dev error: Timed out while inspecting element 3.
  useDebugValue(value, v => getValueSlowly(v))

  useEffect(() => {}, [key, value, localStorage]);

  const remove = useCallback(() => {}, []);

  return [value, setValue, remove];
};
