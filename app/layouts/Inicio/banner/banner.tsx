"use client";
import CenterDiv from "@/app/components/center-div";

import { theme } from "@/app/common/styles/themes/theme";

function Banner() {
  return (
    <>
      <section>
        <CenterDiv>
          <ul className="container"></ul>
        </CenterDiv>
      </section>
      <style jsx>{`
        section {
          padding: 20px 60px;
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
          align-items: center;
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
