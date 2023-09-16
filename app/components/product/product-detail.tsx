"use client";
import React from "react";
import Image from "next/image";

import { theme } from "@/app/common/styles/themes/theme";
import CenterDiv from "@/app/components/center-div";
import PageSection from "@/app/components/page-section";
import SectionTitles from "@/app/components/titles/section-titles";

import { ProductDetailType } from "../../types/product-detail.type";

function ProductDetail({
  title,
  subtitle,
  description,
  imageUrl,
  dataSheetLink,
  altDescription,
}: ProductDetailType) {
  return (
    <>
      <PageSection>
        <CenterDiv backgroundColor={theme.secondary.greyBackground}>
          <div className="container">
            <article className="side_container">
              <div className="text_container">
                <h4>{subtitle}</h4>
                <SectionTitles
                  text={title}
                  colorText={theme.secondary.black}
                  fontSize="50px"
                />
                <br />
                <p>{description}</p>
              </div>
              <a href={dataSheetLink} target="_blank" rel="noreferrer">
                <span>Ver Ficha Técnica</span>
              </a>
            </article>
            <div className="image_container">
              <Image
                src={imageUrl}
                alt={`${altDescription} - Gherbezza, fabrica de turbinas para sembradoras`}
                title={`${altDescription}`}
                fill
                style={{ objectFit: "cover" }}
                placeholder="blur"
                blurDataURL={imageUrl}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
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
        span {
          font-weight: bold;
          font-size: 22px;
          cursor: pointer;
          border: 2px solid ${theme.primary.lightGreen};
          padding: 8px 16px;
          color: ${theme.primary.lightGreen};
          transition: all 0.3s ease;
        }
        span:hover {
          background-color: ${theme.primary.lightGreen};
          color: ${theme.secondary.white};
        }
        h4 {
          font-weight: 400;
          font-size: 20px;
          color: ${theme.secondary.lightGrey};
        }
      `}</style>
    </>
  );
}

export default ProductDetail;
