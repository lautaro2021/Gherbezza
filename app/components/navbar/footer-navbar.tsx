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
      `}</style>
    </>
  );
}

export default FooterNavbar;
