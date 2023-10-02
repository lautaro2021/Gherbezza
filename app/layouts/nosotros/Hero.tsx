"use client";
import React from "react";

import { theme } from "@/app/common/styles/themes/theme";
import HeroTitles from "@/app/components/titles/hero-titles";
import CenterDiv from "@/app/components/center-div";
import RouteText from "@/app/components/routeText";

function Hero() {
  return (
    <>
      <section>
        <CenterDiv>
          <div className="container">
            <RouteText linkedText="INICIO" text="NOSOTROS" />
            <HeroTitles
              text="NUESTRA EMPRESA"
              colorText={theme.secondary.white}
            />
          </div>
        </CenterDiv>
      </section>
      <style jsx>{`
        section {
          width: 100%;
          height: 100dvh;
          max-height: 768px;
          background-size: cover;
          background-position: center;
          background-image: linear-gradient(
              rgba(0, 0, 0, 0.5),
              rgba(0, 0, 0, 0.5)
            ),
            url("/images/layouts/nosotros/Hero/background.webp");
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .container {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
        }
      `}</style>
    </>
  );
}

export default Hero;
