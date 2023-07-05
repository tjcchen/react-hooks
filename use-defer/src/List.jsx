/**
 * useDeferredValue Hook - similar to debounce and throttling
 * 
 * Explanation: The useDeferredValue hook allows us to fix slow render problem by implementing a delay
 * before some information is calculated. This works in a very similar way to debouncing
 * and throttling since our deferred value will only be calculated after the important state
 * updates have finished running.
 * 
 */
import React, { useMemo, useDeferredValue, useEffect } from "react";

const List = ({ input }) => {
  const LIST_SIZE = 20000;
  const deferredInput = useDeferredValue(input);

  const list = useMemo(() => {
    const l = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(<div key={i}>{deferredInput}</div>);
    }
    return l;
  }, [deferredInput]);

  useEffect(() => {
    console.log(`Input: ${input}\nDeferred: ${deferredInput}`);
  }, [input, deferredInput]);

  return list;
};

export default List;
