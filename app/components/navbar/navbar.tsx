"use client";
import React from "react";
import Link from "next/link";

import CenterDiv from "../center-div";
import { navbarOptions } from "@/app/common/utils/navbar-options";
import NavbarType from "@/app/types/navbar.type";

import { theme } from "@/app/common/styles/themes/theme";

function Navbar({ footerPosition = false }: any) {
  return (
    <>
      <nav>
        <CenterDiv>
          <img
            src={"/images/logo/logo-completo-color.png"}
            alt="logo-gherbezza-turbinas-neumaticas-sembradoras"
            title="Gherbezza, turbinas neumaticas para sembradoras"
          />
          <ul>
            {navbarOptions.map((option: NavbarType, index: number) => (
              <li key={option.name}>
                <Link href={option.link}>{option.name}</Link>
              </li>
            ))}
          </ul>
        </CenterDiv>
      </nav>
      <style jsx>{`
        nav {
          ${!footerPosition &&
          `
            position: fixed;
            top: 0;
            left: 0;
          `}
          top: 0;
          left: 0;
          width: 100%;
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0px 100px;
          z-index: 1000;
        }
        img {
          width: 250px;
        }
        ul {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 40px;
        }
        ul li {
          list-style: none;
          font-size: 18px;
          color: ${!footerPosition
            ? theme.secondary.black
            : theme.secondary.white};
        }
        ul li:hover {
          color: ${theme.primary.lightGreen};
          transition: all 0.2s ease;
        }
        ul li:last-child {
          font-weight: bold;
        }
      `}</style>
    </>
  );
}

export default Navbar;
