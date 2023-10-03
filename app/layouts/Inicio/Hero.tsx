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
          <div className="container">
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
          </div>
        </CenterDiv>
      </section>
      <style jsx>
        {`
          section {
            width: 100%;
            height: 100dvh;
            min-height: 650px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: -1;
            filter: brightness(0.2);
          }
          .container {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .grid_container {
            width: 100%;
            height: 70%;
            max-height: 1000px;
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
            justify-content: flex-end;
            align-items: flex-end;
          }
          h1 {
            font-size: var(--bd-hero-home-fontsize);
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
          @media screen and (max-width: 1920px) {
            h1 {
              font-size: var(--d-hero-home-fontsize);
            }
          }
          @media screen and (max-width: 1000px) {
            .grid_container {
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: space-between;
            }
            .cards_container {
              height: 100%;
            }
            .text_container {
              width: 100%;
            }
          }
          @media screen and (max-width: 600px) {
            h1 {
              font-size: var(--s-hero-home-fontsize);
            }
          }
          @media screen and (max-width: 380px) {
            h1 {
              font-size: var(--sm-hero-home-fontsize);
            }
          }
        `}
      </style>
    </>
  );
}

export default Hero;
