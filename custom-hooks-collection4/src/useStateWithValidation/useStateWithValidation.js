/**
 * Custom useStateWithValidation Hook
 */
import { useState, useCallback } from "react";

const useStateWithValidation = (validationFunc, initialValue) => {
  const [state, setState] = useState(initialValue);
  const [isValid, setIsValid] = useState(() => validationFunc(state));

  // setState
  const onChange = useCallback(
    (nextState) => {
      const value =
        typeof nextState === "function" ? nextState(state) : nextState;
      setState(value);
      setIsValid(validationFunc(value));
    },
    [validationFunc]
  );

  return [state, onChange, isValid];
};

export default useStateWithValidation;
