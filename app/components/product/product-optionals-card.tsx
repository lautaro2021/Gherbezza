import React from "react";

import { ProductOptionalsType } from "@/app/common/utils/products/eolo/optionals/optionals-data";
import { theme } from "../../common/styles/themes/theme";

function ProductOptionalsCard({ text, position }: ProductOptionalsType) {
  return (
    <>
      <article>
        <span>{position}</span>
        <p>{text}</p>
      </article>
      <style jsx>{`
        article {
          width: 100%;
          height: 300px;
          padding: 20px;
          display: flex;
          align-items: center;
          background-color: ${theme.secondary.greyBackground};
          position: relative;
          text-align: center;
        }
        span {
          position: absolute;
          top: 20px;
          left: 20px;
          color: ${theme.secondary.lightGrey};
          font-size: 20px;
          font-weight: bold;
        }
        p {
          font-size: 24px;
          font-weight: bold;
        }
      `}</style>
    </>
  );
}

export default ProductOptionalsCard;
