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
            {buttonText}
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
      `}</style>
    </>
  );
}

export default Card;
