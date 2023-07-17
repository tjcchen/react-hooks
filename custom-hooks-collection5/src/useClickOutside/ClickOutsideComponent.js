import { useRef, useState } from "react";
import useClickOutside from "./useClickOutside";

const ClickOutsideComponent = () => {
  const [open, setOpen] = useState(false);
  const btnRef = useRef();
  const modalRef = useRef();

  useClickOutside(modalRef, (e) => {
    // exclude open btn itself
    if (open && e.target !== btnRef.current) {
      setOpen(false);
    }
  });

  return (
    <>
      <button ref={btnRef} onClick={(e) => setOpen(true)}>
        Open
      </button>
      <div
        ref={modalRef}
        style={{
          display: open ? "block" : "none",
          backgroundColor: "blue",
          color: "white",
          width: "300px",
          height: "300px",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate3d(-50%, -50%, 0)",
        }}
      >
        <span>Modal</span>
      </div>
    </>
  );
};

export default ClickOutsideComponent;
