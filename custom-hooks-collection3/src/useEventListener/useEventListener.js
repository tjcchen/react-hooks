/**
 * Custom useEventListener Hook
 */
import { useEffect, useRef } from "react";

const useEventListener = (eventType, callback, element = window) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  // mount
  useEffect(() => {
    const handler = (e) => callbackRef.current(e);
    element.addEventListener(eventType, handler);

    // unmount
    return () => element.removeEventListener(eventType, handler);
  }, [eventType, element]);
};

export default useEventListener;
