/**
 * Custom useEffectOnce Hook
 */
import { useEffect } from "react";

const useEffectOnce = (cb) => {
  useEffect(cb, []);
};

export default useEffectOnce;
