"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

import CenterDiv from "../center-div";
import { navbarOptions } from "@/app/common/utils/navbar-options";
import NavbarType from "@/app/types/navbar.type";
import useGetCurrentPathname from "@/app/common/utils/getCurrentPathname";

import { theme } from "@/app/common/styles/themes/theme";

type Navbar = {
  backgroundColor: string;
  textColor: string;
};

function Navbar({ backgroundColor, textColor }: Navbar) {
  const [navbarColor, setNavbarColor] = useState<string>(backgroundColor);
  const [navbarTextColor, setNavbarTextColor] = useState<string>(textColor);
  const [showMobileOptions, setShowMobileOptions] = useState(false);
  const actualPath = useGetCurrentPathname();

  const actualStringPath = actualPath.split("/")[1].length
    ? actualPath.split("/")[1]
    : "Inicio";

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setNavbarColor(theme.secondary.white);
      setNavbarTextColor(theme.secondary.black);
    } else {
      setNavbarColor(backgroundColor);
      setNavbarTextColor(textColor);
    }
  };

  const handleOptionsMobile = () => {
    setShowMobileOptions(!showMobileOptions);
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
                src={"/images/logo/logo.webp"}
                alt="logo-gherbezza-turbinas-neumaticas-sembradoras"
                title="Gherbezza, turbinas neumaticas para sembradoras"
                className="iso_desktop"
                width={250}
                height={60}
                loading="lazy"
              />
              <img
                src={"/images/logo/ISO.webp"}
                alt="logo-gherbezza-turbinas-neumaticas-sembradoras"
                title="Gherbezza, turbinas neumaticas para sembradoras"
                className="iso_mobile"
                width="50px"
                height="50px"
                loading="lazy"
              />
            </Link>
            <ul className={showMobileOptions ? "mobile" : "desktop"}>
              {navbarOptions.map((option: NavbarType, index: number) => {
                const currentNavigation =
                  option.name.toLowerCase() === actualStringPath.toLowerCase();
                const style = {
                  color: currentNavigation ? theme.primary.lightGreen : "",
                };
                return (
                  <li
                    key={index}
                    style={style}
                    onClick={() => setShowMobileOptions(false)}
                  >
                    <Link href={option.link}>{option.name}</Link>
                  </li>
                );
              })}
            </ul>
            {showMobileOptions ? (
              <div className="mobile_icon">
                <GrClose
                  onClick={handleOptionsMobile}
                  style={{ width: "22px", height: "22px" }}
                />
              </div>
            ) : (
              <div className="mobile_icon">
                <FaBars
                  onClick={handleOptionsMobile}
                  style={{ width: "22px", height: "22px" }}
                />
              </div>
            )}
          </div>
        </CenterDiv>
      </nav>
      <style jsx>{`
        nav {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
          background-color: ${navbarColor};
          box-shadow: ${navbarColor !== "transparent" &&
          "0px 2px 6px 2px rgba(117, 117, 117, 0.2)"};
          transition: all 0.3s ease;
        }
        .iso_mobile {
          display: none;
        }
        .nav_container {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        img {
          aspect-ratio: attr(width) / attr(height);
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
        .mobile_icon {
          display: none;
        }
        @media screen and (max-width: 1000px) {
          nav {
            background-color: ${theme.secondary.white};
          }
          .desktop {
            display: none;
          }
          .mobile {
            position: absolute;
            top: 115px;
            left: 0;
            width: 100%;
            flex-direction: column;
            padding: 12px 30px;
            gap: 12px;
            border-radius: 0px 0px 15px 15px;
            box-shadow: 0px 10px 12px 1px rgba(0, 0, 0, 0.05);
            animation: appear 0.5s ease;
            background-color: ${theme.secondary.white};
          }
          .mobile li {
            color: ${theme.secondary.black} !important;
          }
          .mobile_icon {
            display: inline-block;
          }
          @keyframes appear {
            from {
              height: 0px;
              opacity: -1;
            }
            to {
              height: auto;
              opacity: 1;
            }
          }
          .mobile li {
            font-size: 22px;
          }
          svg {
            display: inline-block;
            max-width: 20px;
          }
        }
        @media screen and (max-width: 760px) {
          nav {
            height: 80px;
          }
          .mobile {
            top: 80px;
          }
          img {
            max-width: 200px;
            max-height: 50px;
          }
          .mobile li {
            font-size: 16px;
          }
        }
        @media screen and (max-width: 500px) {
          .iso_desktop {
            display: none;
          }
          .iso_mobile {
            display: inline-block;
            max-width: 50px;
          }
        }
      `}</style>
    </>
  );
}

export default Navbar;
