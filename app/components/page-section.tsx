import React from "react";
import { theme } from "../common/styles/themes/theme";

type PageSectionType = {
  children: any;
  backgroundColor?: string;
  height?: string;
};

function PageSection({ children, backgroundColor, height }: PageSectionType) {
  return (
    <>
      <section id="pagesection">{children}</section>
      <style jsx>{`
        section {
          width: 100%;
          height: ${!height ? "100dvh" : "auto"};
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
