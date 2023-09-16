"use client";
import { theme } from "@/app/common/styles/themes/theme";
import CenterDiv from "@/app/components/center-div";
import PageSection from "@/app/components/page-section";
import SectionTitles from "@/app/components/titles/section-titles";
import React from "react";

function KnowEolo() {
  return (
    <>
      <PageSection maxHeight height>
        <CenterDiv>
          <SectionTitles
            text="CONOCE LA LINEA EOLO"
            colorText={theme.secondary.black}
            centeredText
            fontSize="90px"
          />
        </CenterDiv>
      </PageSection>
      <style jsx>{``}</style>
    </>
  );
}

export default KnowEolo;
