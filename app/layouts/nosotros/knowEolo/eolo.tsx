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
                />
              ))}
            </div>
            <ul>
              {eoloCardsInfo.map((text: EoloCardsType, index: number) => (
                <li key={index}>
                  <strong>{index + 1}</strong>
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
          max-width: 25%;
        }
        img:not(:nth-child(odd)) {
          max-width: 50%;
        }
        ul {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1vw;
          margin: 100px 0px;
          background-color: ${theme.secondary.white};
          padding: 50px;
          border-radius: 8px;
        }
        li {
          list-style: none;
          display: flex;
          flex-direction: column;
          padding: 20px;
          background-color: ${theme.secondary.greyBackground};
          color: ${theme.secondary.black};
          width: 25%;
          max-width: 300px;
          border-radius: 8px;
          box-shadow: 0px 0px 12px 5px rgba(0, 0, 0, 0.2);
        }
        li p {
          text-align: center;
          font-size: 20px;
          font-weight: 200;
        }
      `}</style>
    </>
  );
}

export default Eolo;
