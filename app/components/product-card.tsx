"use client";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

import { ProductCardType } from "../types/product-card.type";
import { theme } from "../common/styles/themes/theme";

function ProductCard({ title, description, openModal }: ProductCardType) {
  return (
    <>
      <article onClick={() => openModal(title)}>
        <h3>{title}</h3>
        <br />
        <p>{description}</p>
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
          width: 30%;
          height: 300px;
          display: flex;
          flex-direction: column;
          background-color: ${theme.secondary.greyBackground};
          padding: 25px;
          position: relative;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        h3 {
          font-size: 40px;
          font-weight: 400;
        }
        p {
          font-size: 22px;
          font-weight: 200;
        }
        article:hover {
          background-color: ${theme.primary.darkGreen};
          color: ${theme.secondary.white};
        }
      `}</style>
    </>
  );
}

export default ProductCard;
