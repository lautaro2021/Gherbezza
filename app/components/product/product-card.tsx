"use client";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

import { ProductCardType } from "../../types/product-card.type";
import { theme } from "../../common/styles/themes/theme";

function ProductCard({
  product,
  openModal,
}: {
  product: ProductCardType;
  openModal: (productInfo: ProductCardType) => void;
}) {
  return (
    <>
      <article onClick={() => openModal(product)}>
        <h3>{product.title}</h3>
        <br />
        <p>{product.description}</p>
        <BsArrowRight
          style={{
            position: "absolute",
            bottom: "25px",
            right: "25px",
            fontSize: "24px",
          }}
        />
      </article>
      <style jsx>{`
        article {
          width: 100%;
          height: 300px;
          display: flex;
          flex-direction: column;
          background-color: ${theme.secondary.greyBackground};
          padding: 25px;
          position: relative;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        h3 {
          font-size: 35px;
          font-weight: 400;
        }
        p {
          font-size: 24px;
          font-weight: 200;
        }
        article:hover {
          box-shadow: 0px 5px 12px 2px rgba(0, 0, 0, 0.1);
        }
        @media screen and (max-width: 1920px) {
          p {
            font-size: var(--d-text-fontsize);
          }
          h3 {
            font-size: clamp(30px, 1.823vw, 35px);
          }
          article {
            height: clamp(250px, 15.625vw, 300px);
          }
        }
        @media screen and (max-width: 1000px) {
          article {
            max-height: 180px;
            padding: 12px 25px;
          }
          p {
            width: 85%;
            font-size: clamp(16px, 2vw, 20px);
          }
        }
        @media screen and (max-width: 760px) {
          h3 {
            font-size: clamp(25px, 3.947vw, 30px);
          }
          p {
            font-size: clamp(14px, 2.105vw, 16px);
          }
        }
      `}</style>
    </>
  );
}

export default ProductCard;
