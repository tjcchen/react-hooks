import { useEffect } from "react";
import useTimeout from "../useTimeout/useTimeout";

const useDebounce = (callback, delay, dependencies) => {
  const { reset, clear } = useTimeout(callback, delay);

  // everytime when dependencies or reset changes, then we reset it again
  useEffect(reset, [...dependencies, reset]);

  // clear the invocation for the first run
  useEffect(clear, []);
};

export default useDebounce;
