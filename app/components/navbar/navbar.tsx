"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import CenterDiv from "../center-div";
import { navbarOptions } from "@/app/common/utils/navbar-options";
import NavbarType from "@/app/types/navbar.type";
import useGetCurrentPathname from "@/app/common/utils/getCurrentPathname";

import { theme } from "@/app/common/styles/themes/theme";

type Navbar = {
  footerPosition?: boolean;
  backgroundColor: string;
  textColor: string;
};

function Navbar({
  footerPosition = false,
  backgroundColor,
  textColor,
}: Navbar) {
  const [navbarColor, setNavbarColor] = useState<string>(backgroundColor);
  const [navbarTextColor, setNavbarTextColor] = useState<string>(textColor);
  const actualPath = useGetCurrentPathname();

  const handleScroll = () => {
    if (!footerPosition) {
      if (window.scrollY > 100) {
        setNavbarColor(theme.secondary.white);
        setNavbarTextColor(theme.secondary.black);
      } else {
        setNavbarColor(backgroundColor);
        setNavbarTextColor(textColor);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav>
        <CenterDiv>
          <div className="nav_container">
            <Link href="/">
              <img
                src={"/images/logo/logo.png"}
                alt="logo-gherbezza-turbinas-neumaticas-sembradoras"
                title="Gherbezza, turbinas neumaticas para sembradoras"
              />
            </Link>
            <ul>
              {navbarOptions.map((option: NavbarType, index: number) => (
                <li key={option.name}>
                  <Link href={option.link}>{option.name}</Link>
                </li>
              ))}
            </ul>
          </div>
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
          background-color: ${navbarColor};
          box-shadow: ${!footerPosition &&
          navbarColor !== "transparent" &&
          "0px 2px 6px 2px rgba(117, 117, 117, 0.2)"};
          transition: all 0.3s ease;
        }
        .nav_container {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
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
          font-weight: 400;
          color: ${actualPath === "/contacto"
            ? theme.secondary.black
            : navbarTextColor};
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
