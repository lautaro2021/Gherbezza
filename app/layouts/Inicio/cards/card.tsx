import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

import CardType from "@/app/types/card.type";
import { theme } from "@/app/common/styles/themes/theme";

function Card({ subtitle, title, description, buttonText, href }: CardType) {
  return (
    <>
      <Link href={href} style={{ width: "100%", height: "100%" }}>
        <div className="card_container">
          <div className="info_container">
            <span>{subtitle}</span>
            <h3>{title}</h3>
            <br />
            <br />
            <p>{description}</p>
          </div>
          <div className="button_container">
            <strong>{buttonText}</strong>

            <BsArrowRight />
          </div>
        </div>
      </Link>

      <style jsx>{`
        .card_container {
          border: 2px solid white;
          height: 100%;
          width: 100%;
          border-radius: 0px 60px 0px 0px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          padding: 20px;
          color: ${theme.secondary.white};
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .card_container:hover {
          background-color: white;
          color: ${theme.secondary.darkGrey};
        }
        h3 {
          font-size: 35px;
          font-weight: bold;
          white-space: nowrap;
        }
        p {
          font-weight: 200;
        }
        .button_container {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 2px solid white;
          padding-top: 10px;
        }
        @media screen and (max-width: 1500px) {
          h3 {
            font-size: clamp(28px, 2.33vw, 35vw);
          }
        }
        @media screen and (max-width: 1200px) {
          .card_container {
            padding: 10px;
          }
          span,
          p,
          strong {
            font-size: clamp(14px, 1.33vw, 16px);
          }
        }
        @media screen and (max-width: 1000px) {
          .card_container {
            max-width: 170px;
            height: 100%;
            max-height: 370px;
          }
        }
        @media screen and (max-width: 600px) {
          .card_container {
            width: 100%;
            height: auto;
            min-height: 260px;
          }
          br {
            display: none;
          }
          h3 {
            white-space: wrap;
            height: 80px;
            font-size: clamp(20px, 4.66vw, 28px);
          }
          span,
          p,
          strong {
            font-size: clamp(10px, 2.33vw, 14px);
          }
        }
      `}</style>
    </>
  );
}

export default Card;
