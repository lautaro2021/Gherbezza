import React from "react";
import { theme } from "@/app/common/styles/themes/theme";

type SectionTitle = {
  text: string;
  colorText?: string;
  centeredText?: boolean;
  fontSize?: string;
};
function SectionTitles({
  text,
  colorText,
  centeredText,
  fontSize,
}: SectionTitle) {
  return (
    <>
      <h2>{text}</h2>
      <style jsx>{`
        h2 {
          font-size: ${fontSize ? fontSize : "60px"};
          color: ${!colorText ? theme.primary.lightGreen : colorText};
          font-weight: bold;
          line-height: 100%;
          width: ${centeredText ? "100%" : ""};
          text-align: ${centeredText ? "center" : ""};
        }
        @media screen and (max-width: 1920px) {
          h2 {
            font-size: var(--d-title-fontsize);
          }
        }
        @media screen and (max-width: 600px) {
          h2 {
            font-size: var(--s-title-fontsize);
          }
        }
      `}</style>
    </>
  );
}

export default SectionTitles;
