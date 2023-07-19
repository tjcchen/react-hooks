import { useRef, useEffect } from "react";
import useLongPress from "./useLongPress";

const LongPressComponent = () => {
  const elementRef = useRef();
  useLongPress(elementRef, () => alert("Long Press"));

  return (
    <div
      ref={elementRef}
      style={{
        backgroundColor: "red",
        width: "200px",
        height: "200px",
        position: "absolute",
        top: "calc(50% - 100px)",
        left: "calc(50% - 100px)",
      }}
    ></div>
  );
};

export default LongPressComponent;
