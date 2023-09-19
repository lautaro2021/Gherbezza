"use client";
import React from "react";

import { cardsProperties } from "@/app/common/utils/cards";
import Card from "./cards/card";
import CardType from "@/app/types/card.type";
import CenterDiv from "@/app/components/center-div";
import { theme } from "@/app/common/styles/themes/theme";

function Hero() {
  return (
    <>
      <section>
        <video
          autoPlay
          loop
          muted
          playsInline
          id="Gherbezza%20turbinas%20neumaticas%20para%20sembradoras%20-%20Home%20BG"
          poster="https://res.cloudinary.com/dn72zz8r5/image/upload/v1693594263/Gherbezza%20-%20Hero%20background.png"
        >
          <source
            src="https://res.cloudinary.com/dn72zz8r5/video/upload/v1693592799/pexels-altaf-shah-9487183_2160p_c47eht.mp4"
            type="video/mp4"
          />
        </video>
        <CenterDiv>
          <div className="grid_container">
            <div className="cards_container">
              {cardsProperties.map((card: CardType, index: number) => (
                <Card
                  title={card.title}
                  subtitle={card.subtitle}
                  description={card.description}
                  buttonText={card.buttonText}
                  key={index}
                  href={card.href}
                />
              ))}
            </div>
            <div className="text_container">
              <h1>
                <span>DISEÑO</span>
                <span>TECNOLOGÍA</span>
                <span>INNOVACIÓN</span>
              </h1>
            </div>
          </div>
        </CenterDiv>
      </section>
      <style jsx>
        {`
          section {
            width: 100%;
            height: 100vh;
            min-height: 650px;
            padding: 200px 150px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            max-height: 100dvh;
            object-fit: cover;
            z-index: -1;
            filter: brightness(0.2);
          }
          .grid_container {
            width: 100%;
            height: 100%;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 1fr);
            grid-column-gap: 0px;
            grid-row-gap: 0px;
          }
          .cards_container {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 10px;
            grid-area: 1 / 1 / 2 / 2;
          }
          .text_container {
            grid-area: 2 / 2 / 3 / 3;
            text-align: end;
            display: flex;
            align-items: flex-end;
          }
          h1 {
            font-size: 120px;
            font-weight: bold;
            line-height: 110%;
          }
          span {
            display: block;
            color: ${theme.secondary.white};
          }
          span:nth-child(2) {
            color: ${theme.primary.red};
          }
        `}
      </style>
    </>
  );
}

export default Hero;
