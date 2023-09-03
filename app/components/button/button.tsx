import React from "react";
import Link from "next/link";

import { BsArrowRight } from "react-icons/bs";
import { theme } from "@/app/common/styles/themes/theme";

type ButtonType = {
  text?: string;
  bordered?: boolean;
  textColor?: string;
  link: string;
};
function Button({ text, bordered = false, textColor, link }: ButtonType) {
  return (
    <>
      <Link href={link ?? "/"}>
        <button>
          <span>{text}</span>
          <BsArrowRight />
        </button>
      </Link>
      <style jsx>{`
        button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          color: ${textColor};
          border: ${bordered ? "1px solid white" : "none"};
          background: none;
          font-weight: bold;
          font-size: 18px;
          transition: all 0.2s ease;
          text-align: start;
          cursor: pointer;
          padding: ${bordered ? "10px 16px" : ""};
          margin: 25px 0px;
          transition: all 0.3s ease;
        }
        button:hover {
          ${!bordered
            ? `
          color: ${theme.primary.lightGreen};
          gap: 20px;
          `
            : `
          background-color: ${theme.secondary.white};
          color: ${theme.secondary.black};
          gap: 20px;
          `}
        }
      `}</style>
    </>
  );
}

export default Button;
