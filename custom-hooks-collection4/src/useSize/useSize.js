/**
 * Custom useSize Hook
 * 
 * doc: retrive the dimension/size of an element
 */
import { useState, useEffect } from "react";

const useSize = (ref) => {
  const [size, setSize] = useState({});

  useEffect(() => {
    if (ref.current == null) {
      return;
    }

    // The ResizeObserver interface reports changes to the dimensions of an Element's
    // content or border box, or the bounding box of an SVGElement.
    // To observe the ref element with ResizeObserver
    const observer = new ResizeObserver(([entry]) =>
      setSize(entry.contentRect)
    );
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return size;
};

export default useSize;
