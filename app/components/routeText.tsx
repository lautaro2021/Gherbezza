import React from "react";
import Link from "next/link";

import { theme } from "../common/styles/themes/theme";

type RouteTextType = {
  linkedTextColor?: string;
  textColor?: string;
  linkedText: string;
  text: string;
  fontSize?: string;
};

function RouteText({
  linkedTextColor,
  textColor,
  linkedText,
  text,
  fontSize,
}: RouteTextType) {
  return (
    <>
      <span>
        <Link href="/">{linkedText}</Link>/<strong>{text}</strong>
      </span>
      <style jsx>{`
        span {
          font-size: ${fontSize ? fontSize : "18px"};
          color: ${linkedTextColor
            ? linkedTextColor
            : theme.secondary.lightGrey};
        }
        span strong {
          color: ${textColor ? textColor : theme.secondary.darkGrey};
        }
      `}</style>
    </>
  );
}

export default RouteText;
