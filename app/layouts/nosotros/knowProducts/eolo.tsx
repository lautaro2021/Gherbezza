"use client";
import React from "react";

import { theme } from "@/app/common/styles/themes/theme";
import CenterDiv from "@/app/components/center-div";
import PageSection from "@/app/components/page-section";

import { eoloImagesData } from "@/app/common/utils/eolo/eolo-images";
import { EoloImageType } from "@/app/types/eolo/eolo-images.type";
import {
  EoloCardsType,
  eoloCardsInfo,
} from "@/app/common/utils/eolo/eolo-info";
import Button from "@/app/components/button/button";

function Eolo() {
  return (
    <>
      <PageSection backgroundColor={theme.primary.darkGreen} height maxHeight>
        <CenterDiv>
          <div className="container">
            <div className="image_container">
              {eoloImagesData.map((image: EoloImageType, index: number) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  title={image.title}
                  loading="lazy"
                />
              ))}
            </div>
            <ul>
              {eoloCardsInfo.map((text: EoloCardsType, index: number) => (
                <li key={index}>
                  <h4>{text.productType}</h4>
                  <br />
                  <p>{text.text}</p>
                </li>
              ))}
            </ul>
            <Button
              text="Ver más"
              textColor={theme.secondary.white}
              bordered
              link="/productos/eolo"
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
          align-items: center;
          justify-content: center;
        }
        .image_container {
          width: 100%;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-top: -100px;
        }
        img:nth-child(odd) {
          height: 400px;
          max-width: 25%;
        }
        ul {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1vw;
          margin: 100px 0px;
          padding: 50px 0px;
          border-radius: 8px;
        }
        li {
          list-style: none;
          display: flex;
          flex-direction: column;
          padding: 20px;
          color: ${theme.secondary.white};
          border: 2px solid ${theme.secondary.white};
          width: 100%;
          border-radius: 8px;
          text-align: center;
          min-height: 200px;
        }
        li h4 {
          color: ${theme.primary.orange};
          font-size: 35px;
        }
        li p {
          text-align: center;
          font-size: 20px;
          font-weight: 200;
        }
        @media screen and (max-width: 1920px) {
          li h4 {
            font-size: clamp(30px, 1.563vw, 35px);
          }
          li p {
            font-size: clamp(16px, 1.042vw, 20px);
          }
        }
        @media screen and (max-width: 1530px) {
          img:nth-child(odd) {
            height: 26.667vw;
          }
          img:nth-child(even) {
            height: 45.533vw;
          }
        }
        @media screen and (max-width: 1000px) {
          ul {
            flex-wrap: wrap;
          }
          li {
            max-width: 40%;
          }
        }
        @media screen and (max-width: 760px) {
          ul {
            margin: 0;
          }
          li {
            max-width: 100%;
            min-height: auto;
          }
          li h4 {
            font-size: clamp(25px, 3.906vw, 30px);
          }
          li p {
            font-size: clamp(14px, 2.083vw, 16px);
          }
          img:nth-child(odd) {
            display: none;
          }
          img {
            width: 100%;
            height: auto !important;
          }
        }
      `}</style>
    </>
  );
}

export default Eolo;
