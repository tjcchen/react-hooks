/**
 * Custom Logger Hook
 */
import { useEffect, useDebugValue } from "react";

export default function useUpdateLogger(value) {
  useEffect(() => {
    console.log(value);
  }, [value]);

  // useDebugValue(value);
}
