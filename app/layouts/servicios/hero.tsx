"use client";
import React from "react";

import PageSection from "@/app/components/page-section";
import CenterDiv from "@/app/components/center-div";
import HeroTitles from "@/app/components/titles/hero-titles";
import RouteText from "@/app/components/routeText";
import { theme } from "@/app/common/styles/themes/theme";

function Hero() {
  return (
    <>
      <PageSection backgroundColor={theme.primary.darkGreen}>
        <CenterDiv>
          <div className="container">
            <RouteText linkedText="INICIO" text="SERVICIOS" />
            <HeroTitles
              text="NUESTROS SERVICIOS"
              colorText={theme.secondary.white}
            />
          </div>
        </CenterDiv>
      </PageSection>
      <style jsx>{`
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
