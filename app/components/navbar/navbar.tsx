"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import CenterDiv from "../center-div";
import { navbarOptions } from "@/app/common/utils/navbar-options";
import NavbarType from "@/app/types/navbar.type";

import { theme } from "@/app/common/styles/themes/theme";

function Navbar({ footerPosition = false }: any) {
  const [changeNavbarColor, setChangeNavbarColor] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setChangeNavbarColor(true);
    } else {
      setChangeNavbarColor(false);
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
          background-color: ${!footerPosition &&
          changeNavbarColor &&
          theme.secondary.white};
          box-shadow: ${!footerPosition &&
          changeNavbarColor &&
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
          color: ${changeNavbarColor && !footerPosition
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
