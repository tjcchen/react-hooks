/**
 * Email Form Component
 */
import { useId } from "react";

export default function EmailForm() {
  // to fix the same id issue
  // const id = Math.random();

  // useId hook can guarantee we have the same id on both client and server side,
  // it is very useful for SSR.
  // [recommended] we only have one useId hook inside a component
  const id = useId();

  // we use useRef to control dom element in react, instead of document.querySelector();
  // const ref = useRef();

  return (
    <>
      <label htmlFor={`${id}-email`}>Email</label>
      <input type="email" id={`${id}-email`} />
      <br />
      <label htmlFor={`${id}-name`}>Name</label>
      <input type="text" id={`${id}-name`} />
    </>
  );
}
