import { theme } from "@/app/common/styles/themes/theme";
import React from "react";
import { EnumType } from "typescript";

type FormButton = {
  text?: string;
  textColor?: string;
  borderColor?: string;
  background?: string;
  type: "button" | "submit" | "reset" | undefined;
  noBorder?: boolean;
  noHover?: boolean;
};

function FormButton({
  text,
  textColor,
  borderColor,
  background,
  type,
  noBorder,
}: FormButton) {
  return (
    <>
      <button type={type}>{text}</button>
      <style jsx>{`
        button {
          padding: 8px 16px;
          border: ${!noBorder ? "1px solid black" : "none"};
          border-radius: 3px;
          max-width: 120px;
          font-weight: bold;
          font-size: 18px;
          transition: all 0.3s ease;
          cursor: pointer;
          background-color: ${background};
          color: ${textColor ? textColor : theme.secondary.white};
        }
        button:hover {
          ${!noBorder
            ? `
          border: 1px solid ${theme.primary.darkGreen};
          background-color: ${theme.primary.darkGreen};
          color: ${theme.secondary.white};`
            : ``}
        }
      `}</style>
    </>
  );
}

export default FormButton;
