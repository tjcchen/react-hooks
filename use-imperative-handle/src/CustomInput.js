/**
 * CustomInput Component
 *
 * We use React.forwardRef() to resolve the Custom Component ref issue
 */
import React, { useImperativeHandle } from "react";

// with ref
// const CustomInput = ({ style, ...props }, ref) => {
//   return (
//     <input
//       ref={ref}
//       {...props}
//       style={{
//         border: "none",
//         backgroundColor: "lightpink",
//         padding: ".25em",
//         borderBottom: ".1em solid black",
//         borderTopRightRadius: ".25em",
//         borderTopLeftRadius: ".25em",
//         ...style,
//       }}
//     />
//   );
// };

// with useImperativeHandle
const CustomInput = ({ style, ...props }, ref) => {
  // the third parameter is dependency, just like useEffect dependency
  useImperativeHandle(
    ref,
    () => {
      return { alertHi: () => alert("hi") };
    },
    []
  );
  return (
    <input
      ref={ref}
      {...props}
      style={{
        border: "none",
        backgroundColor: "lightpink",
        padding: ".25em",
        borderBottom: ".1em solid black",
        borderTopRightRadius: ".25em",
        borderTopLeftRadius: ".25em",
        ...style,
      }}
    />
  );
};

export default React.forwardRef(CustomInput);
