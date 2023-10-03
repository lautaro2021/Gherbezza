"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

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
                src={"/images/logo/logo.png"}
                alt="logo-gherbezza-turbinas-neumaticas-sembradoras"
                title="Gherbezza, turbinas neumaticas para sembradoras"
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                onClick={handleOptionsMobile}
              >
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                onClick={handleOptionsMobile}
              >
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
              </svg>
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
        svg {
          display: none;
        }
        @media screen and (max-width: 1000px) {
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
        @media screen and (max-width: 650px) {
          img {
            max-width: 200px;
          }
          .mobile li {
            font-size: 16px;
          }
        }
      `}</style>
    </>
  );
}

export default Navbar;
