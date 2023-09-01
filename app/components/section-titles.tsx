import React from "react";
import { theme } from "../common/styles/themes/theme";

type SectionTitle = {
  text: string;
  colorText?: string;
  centeredText?: boolean;
};
function SectionTitles({ text, colorText, centeredText }: SectionTitle) {
  return (
    <>
      <h2>{text}</h2>
      <style jsx>{`
        h2 {
          font-size: 70px;
          color: ${!colorText ? theme.primary.lightGreen : colorText};
          font-weight: bold;
          line-height: 100%;
          text-align: ${centeredText ? "center" : ""};
        }
      `}</style>
    </>
  );
}

export default SectionTitles;
