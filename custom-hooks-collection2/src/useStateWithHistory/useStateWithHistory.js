/**
 * Custom useStateWithHistory Hook
 */
import { useCallback, useRef, useState } from "react";

const useStateWithHistory = (defaultValue, { capacity = 10 } = {}) => {
  const [value, setValue] = useState(defaultValue);
  const historyRef = useRef([value]);
  const pointerRef = useRef(0);

  const set = useCallback(
    (v) => {
      const resolvedValue = typeof v === "function" ? v(value) : v;

      if (historyRef.current[pointerRef.current] !== resolvedValue) {
        // expand history index
        if (pointerRef.current < historyRef.current.length - 1) {
          historyRef.current.splice(pointerRef.current + 1);
        }
        // append new value to history
        historyRef.current.push(resolvedValue);

        while (historyRef.current.length > capacity) {
          historyRef.current.shift(); // remove the top position item
        }
        pointerRef.current = historyRef.current.length - 1;
      }

      setValue(resolvedValue);
    },
    [capacity, value]
  );

  const back = useCallback(() => {
    if (pointerRef.current <= 0) {
      return;
    }
    pointerRef.current--;
    setValue(historyRef.current[pointerRef.current]);
  }, []);

  const forward = useCallback(() => {
    if (pointerRef.current >= historyRef.current.length - 1) {
      return;
    }
    pointerRef.current++;
    setValue(historyRef.current[pointerRef.current]);
  }, []);

  const go = useCallback((index) => {
    if (index < 0 || index > historyRef.current.length - 1) {
      return;
    }
    pointerRef.current = index;
    setValue(historyRef.current[pointerRef.current]);
  }, []);

  return [
    value,
    set,
    {
      history: historyRef.current,
      pointer: pointerRef.current,
      back,
      forward,
      go,
    },
  ];
};

export default useStateWithHistory;
