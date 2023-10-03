"use client";
import Link from "next/link";

import CenterDiv from "../center-div";
import { navbarOptions } from "@/app/common/utils/navbar-options";
import NavbarType from "@/app/types/navbar.type";

import { theme } from "@/app/common/styles/themes/theme";

function FooterNavbar() {
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
                className="desktop"
              />
              <img
                src={"/images/logo/ISO.png"}
                alt="logo-gherbezza-turbinas-neumaticas-sembradoras"
                title="Gherbezza, turbinas neumaticas para sembradoras"
                className="mobile"
              />
            </Link>
            <ul>
              {navbarOptions.map((option: NavbarType, index: number) => {
                return (
                  <li key={index}>
                    <Link href={option.link}>{option.name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </CenterDiv>
      </nav>
      <style jsx>{`
        nav {
          top: 0;
          left: 0;
          width: 100%;
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        .mobile {
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
          color: ${theme.secondary.white};
        }
        ul li:hover {
          color: ${theme.primary.lightGreen};
          transition: all 0.2s ease;
        }
        ul li:last-child {
          font-weight: bold;
        }
        @media screen and (max-width: 1000px) {
          ul li {
            font-size: clamp(16px, 1.8vw, 18px);
          }
          .desktop {
            display: none;
          }
          .mobile {
            display: inline-block;
            max-width: 50px;
          }
        }
        @media screen and (max-width: 760px) {
          .mobile {
            display: none;
          }
          ul {
            width: 100%;
            justify-content: space-between;
            gap: 0;
          }
          ul li {
            font-size: clamp(12px, 2.105vw, 16px);
          }
        }
      `}</style>
    </>
  );
}

export default FooterNavbar;
