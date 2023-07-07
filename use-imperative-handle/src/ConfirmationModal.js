/**
 * Custom Confirmation Modal Component
 */
import React, { useImperativeHandle, useRef } from "react";

const ConfirmationModal = ({ isOpen, onClose }, ref) => {
  const closeRef = useRef();
  const confirmRef = useRef();
  const denyRef = useRef();

  // without the 3rd dependency parameter
  useImperativeHandle(ref, () => {
    return {
      focusCloseBtn: () => {
        console.log("focusCloseBtn");
        closeRef.current.focus();
      },
      focusConfirmBtn: () => {
        console.log("focusConfirmBtn");
        confirmRef.current.focus();
      },
      focusDenyBtn: () => {
        console.log("focusDenyBtn");
        denyRef.current.focus();
      },
    };
  });

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal" ref={ref}>
      <button ref={closeRef} className="close-btn" onClick={onClose}>
        &times;
      </button>
      <div className="modal-header">
        <h1>Title</h1>
      </div>
      <div className="modal-body">Do you confirm?</div>
      <div>
        <button ref={confirmRef} className="confirm-btn" onClick={onClose}>
          Yes
        </button>
        <button ref={denyRef} className="confirm-btn" onClick={onClose}>
          No
        </button>
      </div>
    </div>
  );
};

export default React.forwardRef(ConfirmationModal);
