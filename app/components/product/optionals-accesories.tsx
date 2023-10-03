"use client";
import React from "react";

import CenterDiv from "@/app/components/center-div";
import PageSection from "@/app/components/page-section";
import SectionTitles from "@/app/components/titles/section-titles";
import ProductOptionalsCard from "@/app/components/product/product-optionals-card";

import { theme } from "@/app/common/styles/themes/theme";
import { ProductOptionalsType } from "@/app/common/utils/products/eolo/optionals/optionals-data";

type OptionalsAndAccesoriesType = {
  dataForOptionals: ProductOptionalsType[];
};

function OptionalsAndAccesories({
  dataForOptionals,
}: OptionalsAndAccesoriesType) {
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
              {dataForOptionals.map((optionalData, index: number) => (
                <ProductOptionalsCard
                  optionalDescription={optionalData.optionalDescription}
                  imageUrl={optionalData.imageUrl}
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
          justify-content: flex-start;
          gap: 2vw;
          margin: 50px 0px;
        }
        @media screen and (max-width: 1200px) {
          ul {
            flex-wrap: wrap;
          }
        }
      `}</style>
    </>
  );
}

export default OptionalsAndAccesories;
