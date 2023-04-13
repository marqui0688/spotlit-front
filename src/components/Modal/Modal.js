import React, { useRef, useEffect } from "react";
import "./Modal.scss";

function Modal({ setOpenModal }) {
  const modalRef = useRef();

  useEffect(() => {
    setOpenModal(modalRef);
  }, []);
  return (
    <div ref={modalRef} className="modal__background hidden-modal">
      <div className="modal__container">
        <div className="modal__close-btn">
          <button
            onClick={(e) => {
              e.preventDefault();
              modalRef.current.classList.add("hidden-modal");
            }}
          >
            X
          </button>
        </div>
        <div className="modal__title">
          <h1>You've added an audition!</h1>
        </div>
        <div className="modal__body">
          <p>The audition has been added to your lineup. Good luck!</p>
        </div>
        <div className="modal__footer">
          <button
            onClick={(e) => {
              e.preventDefault();
              modalRef.current.classList.add("hidden-modal");
            }}
            id="cancelBtn"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
