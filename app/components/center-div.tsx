import React from "react";

type CenterDivType = {
  children: React.ReactNode;
  backgroundColor?: string;
  padding?: string;
  borderRadius?: string;
  backgroundImage?: boolean;
  backgroundURL?: string;
};

function CenterDiv({
  children,
  backgroundColor,
  padding,
  borderRadius,
  backgroundImage = false,
  backgroundURL,
}: CenterDivType) {
  return (
    <>
      <div className={backgroundImage ? "bg_image" : ""}>{children}</div>
      <style jsx>{`
        div {
          max-width: 1500px;
          width: 100%;
          height: 100%;
          background-color: ${backgroundColor ? backgroundColor : ""};
          padding: ${padding ? `${padding} 0 ${padding} ${padding}` : ""};
          border-radius: ${borderRadius ? borderRadius : ""};
        }
        .bg_image {
          background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
            url(${backgroundURL});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        @media screen and (max-width: 1530px) {
          div {
            padding: 0px 30px;
          }
        }
      `}</style>
    </>
  );
}

export default CenterDiv;
