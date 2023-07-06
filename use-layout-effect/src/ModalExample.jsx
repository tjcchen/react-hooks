/**
 * useLayoutEffect Hook
 * 
 * useLayoutEffect is synchronous, while useEffect is asynchronous.
 * when you want do some calculation with DOM, you should use useLayoutEffect,
 * otherwise use useEffect.
 */
import React, { useLayoutEffect, useEffect, useState, useRef } from "react";

const ModalExample = () => {
  const [show, setShow] = useState(false);
  const popup = useRef();
  const button = useRef();

  // [not recommended] useEffect runs after the dom is painted, so there might be a visual popping effect
  // useEffect(() => {
  //   if (popup.current == null || button.current == null) {
  //     return;
  //   }
  //   // take a measurement of the dom about button
  //   const { bottom } = button.current.getBoundingClientRect();
  //   popup.current.style.top = `${bottom + 25}px`;
  // }, [show]);

  // [recommended] useLayoutEffect runs before the pop-up shows on the screen
  // When you are manipulating the dom that user can see based on measurements,
  // you need to use useLayoutEffect, otherwise you may the flash effect on your app.
  // While in order cases, you should use useEffect, since it is more performant
  useLayoutEffect(() => {
    if (popup.current == null || button.current == null) {
      return;
    }
    // take a measurement of the dom about button
    const { bottom } = button.current.getBoundingClientRect();
    popup.current.style.top = `${bottom + 25}px`;
  }, [show]);

  return (
    <>
      <button ref={button} onClick={() => setShow((prev) => !prev)}>
        Click Here
      </button>
      {show && (
        <div style={{ position: "absolute" }} ref={popup}>
          This is a popup
        </div>
      )}
    </>
  );
};

export default ModalExample;
