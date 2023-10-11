import React from "react";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";

import { ModalType } from "../../types/modal.type";
import { theme } from "../../common/styles/themes/theme";

function Modal({ isOpen, onClose, product }: ModalType) {
  const { title, images, productInfo, table } = product;

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
              <div className="image_container">
                {images?.map((image: string, index: number) => (
                  <figure key={index} className={`fig${index}`}>
                    <Image
                      src={image}
                      alt={`${title} - image${index}`}
                      title={`${title}, imagen ${index} - Gherbezza, fabrica de turbinas neumaticas para sembradoras`}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </figure>
                ))}
              </div>
              <h4>Detalles</h4>
              <p>{productInfo}</p>
              <br />
              <p>{productInfo}</p>
              <br />
              <p>{productInfo}</p>
              {table && (
                <>
                  <h4>Tabla técnica</h4>
                  <figure className="table_container">
                    <img
                      src={table}
                      alt={`${title} - table`}
                      title={`${title}, table - Gherbezza, fabrica de turbinas neumaticas para sembradoras`}
                      loading="lazy"
                    />
                  </figure>
                </>
              )}
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
          width: 40%;
          height: 100%;
          max-height: 60%;
          background-color: ${theme.secondary.white};
          border-radius: 5px;
          padding: 0px 25px 25px 25px;
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
          padding-top: 25px;
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
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
        }
        .image_container {
          width: 100%;
          height: 50%;
          min-height: 250px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        figure {
          position: relative;
          height: 100%;
          width: 100%;
        }
        .table_container {
          height: auto;
        }
        img {
          width: 100%;
        }
        h4 {
          color: ${theme.primary.lightGreen};
          width: 100%;
          text-align: left;
          font-size: 32px;
          margin-top: 15px;
        }
        p {
          font-size: 20px;
        }
        @media screen and (max-width: 1920px) {
          .header h3 {
            font-size: clamp(30px, 1.823vw, 35px);
          }
          h4 {
            font-size: clamp(28px, 1.667vw, 32px);
          }
          p {
            font-size: clamp(16px, 1.042vw, 20px);
          }
        }
        @media screen and (max-width: 1600px) {
          .modal_container {
            width: 50%;
          }
        }
        @media screen and (max-width: 1000px) {
          .modal_container {
            width: 90%;
          }
        }
        @media screen and (max-width: 760px) {
          .image_container {
            height: 35%;
          }
          .header h3 {
            font-size: clamp(28px, 3.947vw, 30px);
          }
          h4 {
            font-size: clamp(25px, 3.684vw, 28px);
          }
          p {
            font-size: clamp(14px, 2.105vw, 16px);
          }
        }
        @media screen and (max-width: 500px) {
          .image_container {
            height: 25%;
            min-height: 110px;
          }
        }
      `}</style>
    </>
  );
}

export default Modal;
