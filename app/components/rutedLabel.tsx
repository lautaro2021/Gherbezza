import React from "react";
import Link from "next/link";

import { theme } from "../common/styles/themes/theme";

type RutedLabelType = {
  linkedTextColor?: string;
  textColor?: string;
  linkedText: string;
  text: string;
  fontSize?: string;
};

function RutedLabel({
  linkedTextColor,
  textColor,
  linkedText,
  text,
  fontSize,
}: RutedLabelType) {
  return (
    <>
      <label>
        <Link href="/">{linkedText}</Link>/<strong>{text}</strong>
      </label>
      <style jsx>{`
        label {
          font-size: ${fontSize ? fontSize : "18px"};
          color: ${linkedTextColor
            ? linkedTextColor
            : theme.secondary.lightGrey};
        }
        label strong {
          color: ${textColor ? textColor : theme.secondary.darkGrey};
        }
      `}</style>
    </>
  );
}

export default RutedLabel;
