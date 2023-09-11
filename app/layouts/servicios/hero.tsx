"use client";
import React from "react";

import PageSection from "@/app/components/page-section";
import CenterDiv from "@/app/components/center-div";
import SectionTitles from "@/app/components/section-titles";
import RutedLabel from "@/app/components/rutedLabel";
import { theme } from "@/app/common/styles/themes/theme";

function Hero() {
  return (
    <>
      <PageSection backgroundColor={theme.primary.darkGreen}>
        <CenterDiv>
          <div className="container">
            <RutedLabel linkedText="INICIO" text="SERVICIOS" />
            <SectionTitles
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
