import React from "react";
import { AiOutlineClose } from "react-icons/ai";

import { ModalType } from "../types/modal.type";
import { theme } from "../common/styles/themes/theme";

function Modal({ isOpen, onClose, product }: ModalType) {
  const { title, images } = product;

  return (
    <>
      {isOpen && (
        <>
          <button onClick={onClose} />
          <div className="modal_container">
            <header className="header">
              <h3>{title}</h3>
              <AiOutlineClose onClick={onClose} style={{ cursor: "pointer" }} />
            </header>
            <section className="body">
              {images?.map((image: string, index: number) => (
                <figure key={index} className={`fig${index}`}>
                  <img src={image} />
                </figure>
              ))}
            </section>
          </div>
        </>
      )}

      <style jsx>{`
        button {
          width: 100%;
          height: 100dvh;
          z-index: 1500;
          position: fixed;
          top: 0;
          left: 0;
          background-color: rgba(0, 0, 0, 0.5);
          border: none;
          cursor: pointer;
        }
        .modal_container {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 30%;
          height: 100%;
          max-height: 60%;
          background-color: ${theme.secondary.white};
          border-radius: 5px;
          padding: 25px;
          overflow-y: scroll;
          z-index: 2000;
          animation: appear 0.3s ease-in-out;
        }
        .modal_container::-webkit-scrollbar {
          width: 8px;
          background-color: ${theme.secondary.greyBackground};
          border-radius: 10px;
        }
        .modal_container::-webkit-scrollbar-thumb {
          background-color: ${theme.primary.lightGreen};
          border-radius: 10px;
          cursor: pointer;
        }
        .header {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid ${theme.secondary.lightGrey};
          position: sticky;
          top: 0;
          left: 0;
          z-index: 500;
          background-color: ${theme.secondary.white};
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
        .body {
          margin-top: 25px;
          width: 100%;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(2, 1fr);
          grid-column-gap: 0px;
          grid-row-gap: 0px;
        }
        img {
          width: 100%;
        }
      `}</style>
    </>
  );
}

export default Modal;
