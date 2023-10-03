"use client";
import ProductCarousel from "./productCarousel";
import CenterDiv from "@/app/components/center-div";
import PageSection from "@/app/components/page-section";

import { ProductDetailType } from "../../types/product-detail.type";
import { theme } from "@/app/common/styles/themes/theme";

function ProductDetail({
  title,
  subtitle,
  description,
  dataSheetLink,
  dataForCarrousel,
}: ProductDetailType) {
  const OPTIONS = { dragFree: true, containScroll: "trimSnaps" };
  return (
    <>
      <PageSection>
        <CenterDiv backgroundColor={theme.secondary.greyBackground}>
          <div className="container">
            <article className="side_container">
              <div className="text_container">
                <h4>{subtitle}</h4>
                <h2>{title}</h2>
                <br />
                <p>{description}</p>
              </div>
              {
                <div className="image_container mobile">
                  <ProductCarousel options={OPTIONS} data={dataForCarrousel} />
                </div>
              }
              <div className="buttons_container">
                <a href={dataSheetLink} target="_blank" rel="noreferrer">
                  <div className="svg_container">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path d="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8V454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V83.8c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5z" />
                    </svg>
                  </div>
                  <div className="a_text_container">
                    <span>Manual de uso</span>
                  </div>
                </a>
                <a href={dataSheetLink} target="_blank" rel="noreferrer">
                  <div className="svg_container">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M177.9 494.1c-18.7 18.7-49.1 18.7-67.9 0L17.9 401.9c-18.7-18.7-18.7-49.1 0-67.9l50.7-50.7 48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48 41.4-41.4 48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48 41.4-41.4 48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48 41.4-41.4 48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48 50.7-50.7c18.7-18.7 49.1-18.7 67.9 0l92.1 92.1c18.7 18.7 18.7 49.1 0 67.9L177.9 494.1z" />
                    </svg>
                  </div>
                  <div className="a_text_container">
                    <span>Medidas</span>
                  </div>
                </a>
                <a href={dataSheetLink} target="_blank" rel="noreferrer">
                  <div className="svg_container">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <path d="M0 448c0 35.3 28.7 64 64 64H224V384c0-17.7 14.3-32 32-32H384V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64V448zM171.3 75.3l-96 96c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l96-96c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6zm96 32l-160 160c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l160-160c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6zM384 384H256V512L384 384z" />
                    </svg>
                  </div>
                  <div className="a_text_container">
                    <span>Ficha Técnica</span>
                  </div>
                </a>
              </div>
            </article>
            <div className="image_container desktop">
              <ProductCarousel options={OPTIONS} data={dataForCarrousel} />
            </div>
          </div>
        </CenterDiv>
      </PageSection>
      <style jsx>{`
        .container {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 50px;
        }
        .side_container {
          height: 100%;
          width: 40%;
          display: flex;
          flex-direction: column;
          align-items: space-between;
          justify-content: space-between;
        }
        p {
          font-size: 24px;
          font-weight: 200;
        }
        .image_container {
          width: 50%;
          height: 100%;
          position: relative;
        }
        .buttons_container {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          gap: 20px;
          height: 100%;
        }
        a {
          font-weight: 600;
          font-size: 22px;
          cursor: pointer;
          color: ${theme.primary.lightGreen};
          background-color: #ececec;
          transition: all 0.3s ease;
          max-width: 280px;
          text-align: center;
          display: flex;
          align-items: center;
        }
        a:hover {
          background-color: ${theme.primary.lightGreen};
          color: ${theme.secondary.white};
        }
        .svg_container {
          width: 15%;
          display: grid;
          place-items: center;
          height: 100%;
          background-color: ${theme.secondary.white};
        }
        .a_text_container {
          width: 85%;
          text-align: center;
          padding: 8px 12px;
          white-space: nowrap;
        }
        svg {
          max-width: 20px;
        }
        h4 {
          font-weight: 400;
          font-size: 20px;
          color: ${theme.secondary.lightGrey};
        }
        h2 {
          font-size: 50px;
          color: ${theme.secondary.black};
        }
        .mobile {
          display: none;
        }
        @media screen and (max-width: 1920px) {
          p {
            font-size: var(--d-text-fontsize);
          }
          h2 {
            font-size: clamp(35px, 2.604vw, 50px);
          }
        }
        @media screen and (max-width: 1530px) {
          .side_container {
            width: 45%;
          }
          .image_container {
            width: 55%;
          }
        }
        @media screen and (max-width: 1000px) {
          .container {
            padding: 50px 0px;
          }
          a {
            max-width: 100%;
          }
          .svg_container {
            width: 10%;
          }
          svg {
            max-width: 16px;
          }
          span {
            font-size: clamp(18px, 2.2vw, 22px);
          }
        }
        @media screen and (max-width: 760px) {
          span {
            font-size: clamp(16px, 2.368vw, 18px);
          }
          p {
            font-size: var(--s-text-fontsize);
          }
          h2 {
            font-size: clamp(30px, 4.605vw, 35px);
          }
          .desktop {
            display: none;
          }
          .side_container {
            width: 100%;
          }
          .mobile {
            display: block;
            padding: 15px 0px;
            width: 100%;
          }
          .container {
            padding: 20px 0px;
          }
          .buttons_container {
            gap: 5px;
            height: auto;
          }
        }
      `}</style>
    </>
  );
}

export default ProductDetail;
