"use client";
import React, { useState } from "react";
import Link from "next/link";

import CenterDiv from "../center-div";
import { productsNavbarData } from "@/app/common/utils/products-navbar.options";
import NavbarType from "@/app/types/navbar.type";
import useGetCurrentPathname from "@/app/common/utils/getCurrentPathname";

import { theme } from "@/app/common/styles/themes/theme";

function ProductsNavbar() {
  const actualPath = useGetCurrentPathname().split("/")[2];

  const color =
    actualPath === "eolo"
      ? theme.products.blue
      : actualPath === "airdrill"
      ? theme.products.brown
      : theme.products.green;

  return (
    <>
      <nav>
        <CenterDiv>
          <ul className="container">
            {productsNavbarData.map((value: NavbarType, index: number) => {
              const product = value.name.toLowerCase().split(" ").join("");
              const selectedProductStyle = product === actualPath && color;
              return (
                <li
                  key={index}
                  style={{
                    backgroundColor: `${
                      selectedProductStyle ? selectedProductStyle : ""
                    }`,
                    color: `${
                      selectedProductStyle
                        ? theme.secondary.white
                        : theme.secondary.black
                    }`,
                  }}
                >
                  <Link href={value.link}>{value.name}</Link>
                </li>
              );
            })}
          </ul>
        </CenterDiv>
      </nav>
      <style jsx>{`
        nav {
          width: 100%;
          height: 50px;
          position: -webkit-sticky;
          position: sticky;
          top: 119px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: ${theme.secondary.greyBackground};
          z-index: 1000;
        }
        .container {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-around;
        }
        li {
          list-style: none;
          font-weight: bold;
          height: 100%;
          width: 100%;
          display: grid;
          place-items: center;
        }
      `}</style>
    </>
  );
}

export default ProductsNavbar;
