import { useRef } from "react";
import useHover from "./useHover";

const HoverComponent = () => {
  const elementRef = useRef();
  const hovered = useHover(elementRef);

  return (
    <div
      ref={elementRef}
      style={{
        backgroundColor: hovered ? "blue" : "red",
        width: "200px",
        height: "200px",
        position: "fixed",
        top: "calc(50% - 100px)",
        left: "calc(50% - 100px)",
      }}
    ></div>
  );
};

export default HoverComponent;
