/**
 * Custom useDeepCompareEffect Hook
 * 
 * use case: compare two same props object when deciding whether to invoke useEffect
 * note: Lodash library has been included in Create-React-App (cra)
 */
import { useEffect, useRef } from "react";
import isEqual from "lodash/fp/isEqual";

const useDeepCompareEffect = (callback, dependencies) => {
  // reference to current dependencies, not the new dependencies
  const currentDependenciesRef = useRef();

  // console.log(currentDependenciesRef.current, dependencies);
  // console.log(isEqual(currentDependenciesRef.current, dependencies));

  // compare the values of two objects props, not the two objects themselves
  // referential equality
  if (!isEqual(currentDependenciesRef.current, dependencies)) {
    currentDependenciesRef.current = dependencies;
  }

  useEffect(callback, [currentDependenciesRef.current]);
};

export default useDeepCompareEffect;
