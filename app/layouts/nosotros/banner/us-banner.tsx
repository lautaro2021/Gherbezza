"use client";
import React from "react";

import { theme } from "@/app/common/styles/themes/theme";
import PageSection from "@/app/components/page-section";
import CenterDiv from "@/app/components/center-div";

import { usBannerData } from "@/app/common/utils/us-banner";
import { UsBannerType } from "@/app/types/us-banner.type";

function Banner() {
  return (
    <>
      <PageSection backgroundColor={theme.primary.darkGreen} height maxHeight>
        <CenterDiv>
          <ul className="container">
            {usBannerData.map((obj: UsBannerType, index: number) => (
              <li key={index}>
                <h3>{obj.title}</h3>
                <p>{obj.description}</p>
              </li>
            ))}
          </ul>
        </CenterDiv>
      </PageSection>
      <style jsx>{`
        .container {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: flex-start;
          justify-content: space-evenly;
        }
        .container li {
          text-align: center;
          list-style: none;
        }
        h3 {
          color: ${theme.primary.orange};
          font-size: 45px;
        }
        p {
          color: ${theme.secondary.white};
          font-size: 18px;
          max-width: 28ch;
          font-weight: 200;
        }
        @media screen and (max-width: 1920px) {
          .container {
            gap: 25px;
          }
          h3 {
            font-size: clamp(35px, 2.344vw, 45px);
          }
          p {
            font-size: clamp(16px, 0.938vw, 18px);
            max-width: 32ch;
          }
        }
        @media screen and (max-width: 1000px) {
          .container {
            flex-wrap: wrap;
          }
        }
        @media screen and (max-width: 760px) {
          p {
            font-size: clamp(12px, 2.083vw, 16px);
          }
          h3 {
            font-size: clamp(28px, 2.344vw, 35px);
          }
        }
      `}</style>
    </>
  );
}

export default Banner;
