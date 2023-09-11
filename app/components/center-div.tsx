import React from "react";

type CenterDivType = {
  children: any;
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
      {backgroundImage ? (
        <div className="bg_image">{children}</div>
      ) : (
        <div>{children}</div>
      )}
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
      `}</style>
    </>
  );
}

export default CenterDiv;
