"use client";
import React from "react";

import CenterDiv from "@/app/components/center-div";
import PageSection from "@/app/components/page-section";
import SectionTitles from "@/app/components/titles/section-titles";
import ProductOptionalsCard from "@/app/components/product/product-optionals-card";

import { theme } from "@/app/common/styles/themes/theme";
import { optionalsData } from "@/app/common/utils/products/eolo/optionals/optionals-data";

function OptionalsAndAccesories() {
  return (
    <>
      <PageSection height maxHeight>
        <CenterDiv>
          <div className="container">
            <SectionTitles
              text="Opcionales y accesorios"
              colorText={theme.primary.lightGreen}
              fontSize="60px"
            />
            <ul>
              {optionalsData.map((value, index: number) => (
                <ProductOptionalsCard
                  text={value.text}
                  position={index + 1}
                  key={index}
                />
              ))}
            </ul>
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
        ul {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2vw;
          margin: 50px 0px;
        }
      `}</style>
    </>
  );
}

export default OptionalsAndAccesories;
