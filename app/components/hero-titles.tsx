import React from "react";
import { theme } from "../common/styles/themes/theme";

type SectionTitle = {
  text: string;
  colorText?: string;
  centeredText?: boolean;
  fontSize?: string;
};
function HeroTitles({ text, colorText, centeredText, fontSize }: SectionTitle) {
  return (
    <>
      <h1>{text}</h1>
      <style jsx>{`
        h1 {
          font-size: ${fontSize ? fontSize : "70px"};
          color: ${!colorText ? theme.primary.lightGreen : colorText};
          font-weight: bold;
          line-height: 100%;
          text-align: ${centeredText ? "center" : ""};
        }
      `}</style>
    </>
  );
}

export default HeroTitles;
