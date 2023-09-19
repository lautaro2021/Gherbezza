"use client";
import { theme } from "@/app/common/styles/themes/theme";
import CenterDiv from "@/app/components/center-div";
import React from "react";

import { bannerData } from "@/app/common/utils/banner";
import BannerType from "@/app/types/banner.type";

function Banner() {
  return (
    <>
      <section>
        <CenterDiv>
          <ul className="container">
            {bannerData.map((data: BannerType, index: number) => (
              <li key={index}>
                <img src={data.image} alt={data.title} title={data.title} />
                <div>
                  <span>{data.title}</span>
                  <p>{data.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </CenterDiv>
      </section>
      <style jsx>{`
        section {
          padding: 40px 60px;
          background-color: ${theme.primary.darkGreen};
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .container {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          width: 100%;
          height: 100%;
          flex-wrap: wrap;
        }
        li {
          list-style: none;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          gap: 20px;
        }
        li div {
          max-width: 320px;
        }
        li span {
          color: ${theme.primary.orange};
          font-weight: bold;
          font-size: 26px;
        }
        li p {
          color: ${theme.secondary.white};
          font-weight: 200;
          font-size: 18px;
        }
      `}</style>
    </>
  );
}

export default Banner;
