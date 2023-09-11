import React from "react";

import { theme } from "@/app/common/styles/themes/theme";

type FormButton = {
  text?: string;
  textColor?: string;
  borderColor?: string;
  background?: string;
  type: "button" | "submit" | "reset" | undefined;
  noBorder?: boolean;
  noHover?: boolean;
  disabled?: boolean;
};

function FormButton({
  text,
  textColor,
  borderColor = "black",
  background,
  type,
  noBorder,
  disabled = false,
}: FormButton) {
  return (
    <>
      <button
        type={type}
        disabled={disabled}
        className={disabled ? "disabledButton" : "no_disabledButton"}
      >
        {text}
      </button>
      <style jsx>{`
        .no_disabledButton {
          padding: 8px 16px;
          border: ${!noBorder ? `1px solid ${borderColor}` : "none"};
          border-radius: 3px;
          max-width: 120px;
          font-weight: bold;
          font-size: 18px;
          transition: all 0.3s ease;
          cursor: pointer;
          background-color: ${background};
          color: ${textColor ? textColor : theme.secondary.white};
        }
        .no_disabledButton:hover {
          ${!noBorder
            ? `
          border: 1px solid ${theme.primary.darkGreen};
          background-color: ${theme.primary.darkGreen};
          color: ${theme.secondary.white};`
            : ``}
        }
        .disabledButton {
          padding: 8px 16px;
          border-radius: 3px;
          max-width: 120px;
          font-weight: bold;
          font-size: 18px;
          transition: all 0.3s ease;
          background-color: ${theme.secondary.lightGrey};
          color: ${theme.secondary.white};
        }
        .disabledButton:hover {
          background-color: ${theme.secondary.lightGrey};
          color: ${theme.secondary.white};
        }
      `}</style>
    </>
  );
}

export default FormButton;
