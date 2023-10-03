import { theme } from "@/app/common/styles/themes/theme";
import React, { useState } from "react";

const ReadMore = ({ text, maxLength }: { text: string; maxLength: number }) => {
  const [showFullText, setShowFullText] = useState(false);

  if (text.length <= maxLength || maxLength === 0) {
    return (
      <>
        <p>{text}</p>
        <style jsx>{`
          p {
            font-size: 24px;
            font-weight: 200;
          }
          span {
            cursor: pointer;
            color: ${theme.primary.lightGreen};
          }
          @media screen and (max-width: 1920px) {
            p {
              font-size: var(--d-text-fontsize);
            }
          }
          @media screen and (max-width: 600px) {
            p {
              font-size: var(--s-text-fontsize);
            }
          }
        `}</style>
      </>
    );
  }

  return (
    <>
      <p>
        {showFullText ? text : `${text.substring(0, maxLength).trim()}... `}
        <span onClick={() => setShowFullText(!showFullText)}>
          {showFullText ? "Leer menos" : "Leer más"}
        </span>
      </p>
      <style jsx>{`
        p {
          font-size: 24px;
          font-weight: 200;
        }
        span {
          cursor: pointer;
          color: ${theme.primary.lightGreen};
        }
        @media screen and (max-width: 1920px) {
          p {
            font-size: var(--d-text-fontsize);
          }
        }
      `}</style>
    </>
  );
};

export default ReadMore;
