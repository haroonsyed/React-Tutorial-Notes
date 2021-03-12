import React, { useEffect } from "react";

const Modal = (props) => {
  const { modalContent, closeModal } = props;

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      closeModal();
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  });

  return (
    <div className="modal">
      <p>{modalContent}</p>
    </div>
  );
};

export default Modal;
