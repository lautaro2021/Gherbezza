"use client";
import React from "react";

import { cardsProperties } from "@/app/common/utils/cards";
import Card from "./cards/card";
import CardType from "@/app/types/card.type";
import CenterDiv from "@/app/components/center-div";
import useOptimizeVideo from "@/app/components/optimize-video/optmizeVideo";

import { theme } from "@/app/common/styles/themes/theme";

function Hero() {
  const { isVideoLoaded, videoUrl } = useOptimizeVideo();

  return (
    <>
      <section>
        {isVideoLoaded && (
          <video
            autoPlay
            loop
            muted
            playsInline
            id="Gherbezza%20turbinas%20neumaticas%20para%20sembradoras%20-%20Home%20BG"
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        )}

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
            background-color: ${theme.primary.darkGreen};
          }
          video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: brightness(0.2);
            background-color: ${theme.primary.darkGreen};
            z-index: 0;
          }
          .video_loader {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: ${theme.primary.darkGreen};
            z-index: -1;
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
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .cards_container {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 10px;
            height: 100%;
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
            video {
              display: none;
            }
            h1 {
              font-size: var(--s-hero-home-fontsize);
            }
          }
          @media screen and (max-width: 400px) {
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
