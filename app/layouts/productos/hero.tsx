"use client";
import React from "react";

import CenterDiv from "@/app/components/center-div";
import { theme } from "@/app/common/styles/themes/theme";
import HeroTitles from "@/app/components/titles/hero-titles";
import RutedLabel from "@/app/components/rutedLabel";

function Hero() {
  return (
    <>
      <section>
        <CenterDiv>
          <div className="container">
            <RutedLabel linkedText="INICIO" text="PRODUCTOS" />
            <HeroTitles
              text="NUESTROS PRODUCTOS"
              colorText={theme.secondary.white}
              fontSize="70px"
            />
          </div>
        </CenterDiv>
      </section>
      <style jsx>{`
        section {
          width: 100%;
          height: 70dvh;
          max-height: 768px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
            url("/images/layouts/productos/hero/productos-bg.webp");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        .container {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
        }
        p {
          color: ${theme.secondary.lightGrey};
          font-size: 24px;
          max-width: 80ch;
          padding-top: 12px;
        }
      `}</style>
    </>
  );
}

export default Hero;
