import React from "react";
import { AiOutlineClose } from "react-icons/ai";

import { ModalType } from "../types/modal.type";
import { theme } from "../common/styles/themes/theme";

function Modal({ isOpen, onClose, modalHeader }: ModalType) {
  return (
    <>
      {isOpen && (
        <section>
          <div className="modal_container">
            <div className="header">
              <h3>{modalHeader}</h3>
              <AiOutlineClose onClick={onClose} style={{ cursor: "pointer" }} />
            </div>
          </div>
        </section>
      )}

      <style jsx>{`
        section {
          width: 100%;
          height: 100dvh;
          position: fixed;
          top: 0;
          left: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 2000;
        }
        .modal_container {
          width: 30%;
          height: 100%;
          max-height: 60%;
          background-color: ${theme.secondary.white};
          border-radius: 10px;
          padding: 25px;
          overflow-y: scroll;
          animation: appear 0.3s ease-in-out;
        }
        .modal_container::-webkit-scrollbar {
          width: 0;
        }
        .header {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .header h3 {
          font-size: 35px;
          color: ${theme.primary.lightGreen};
        }
        @keyframes appear {
          from {
            opacity: 0;
            margin-top: -15vh;
          }
          to {
            opacity: 1;
            margin-top: 0;
          }
        }
      `}</style>
    </>
  );
}

export default Modal;
