"use client";
import React from "react";
import Link from "next/link";

import CenterDiv from "../center-div";
import { navbarOptions } from "@/app/common/utils/navbar-options";
import NavbarType from "@/app/types/navbar.type";

function Navbar() {
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
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0px 100px;
        }
        img {
          width: 250px;
        }
        ul {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
        }
        ul li {
          list-style: none;
          font-size: 18px;
        }
        ul li:last-child {
          font-weight: bold;
        }
      `}</style>
    </>
  );
}

export default Navbar;
