/**
 * Custom useHover Hook
 */
import { useState, useEffect } from "react";

const useHover = (ref) => {
  const [hovered, setHovered] = useState(false);
  const mouseoverHandler = () => setHovered(true);
  const moouseoutHandler = () => setHovered(false);

  useEffect(() => {
    ref.current.addEventListener("mouseover", mouseoverHandler);
    ref.current.addEventListener("mouseout", moouseoutHandler);

    return () => {
      ref.current.removeEventListener("mouseover", mouseoverHandler);
      ref.current.removeEventListener("mouseout", mouseoverHandler);
    };
  }, [ref.current]);

  return hovered;
};

export default useHover;
