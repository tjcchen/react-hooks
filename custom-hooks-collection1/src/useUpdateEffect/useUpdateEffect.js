/**
 * Custom useUpdateEffect Hook
 * 
 * Doc: only invoke callback function, when we update the component.
 * Note: the first run is excluded.
 */
import { useEffect, useRef } from "react";

const useUpdateEffect = (callback, dependencies) => {
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }

    return callback();
  }, dependencies);
};

export default useUpdateEffect;
