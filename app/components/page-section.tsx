import React from "react";
import { theme } from "../common/styles/themes/theme";

type PageSectionType = {
  children: any;
  backgroundColor?: string;
  height?: boolean;
  maxHeight?: boolean;
};

function PageSection({
  children,
  backgroundColor,
  height,
  maxHeight,
}: PageSectionType) {
  return (
    <>
      <section id="pagesection">{children}</section>
      <style jsx>{`
        section {
          width: 100%;
          height: ${!height ? "100dvh" : "auto"};
          max-height: ${!maxHeight ? "768px" : "auto"};
          padding: 50px 0px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: ${backgroundColor
            ? backgroundColor
            : theme.secondary.white};
        }
      `}</style>
    </>
  );
}

export default PageSection;
