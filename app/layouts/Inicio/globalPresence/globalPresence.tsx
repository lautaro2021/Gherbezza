"use client";
import { theme } from "@/app/common/styles/themes/theme";
import Image from "next/image";
import CenterDiv from "@/app/components/center-div";
import React from "react";

import PageSection from "@/app/components/page-section";
import SectionTitles from "@/app/components/titles/section-titles";

function GlobalPresence() {
  return (
    <>
      <PageSection backgroundColor={theme.secondary.greyBackground} height>
        <CenterDiv>
          <div className="container">
            <div className="text_container">
              <SectionTitles
                text="Nuestra presencia global"
                colorText={theme.primary.red}
              />
              <br />
              <p>
                Durante 20 años, hemos forjado alianzas en todo el mundo. Desde
                España e Italia hasta Brasil, Francia, Sudafrica y Uruguay,
                nuestro impacto internacional en la fabricación de turbinas para
                sembradoras es evidente. Conectando países, cultivamos éxito
                agrícola global.
              </p>
            </div>
            <div className="image_container">
              <Image
                src="/images/layouts/inicio/globalPresence/globalPresence.webp"
                alt="nuestra presencia global Gherbezza turbinas neumaticas para sembradoras"
                title="nuestra presencia global Gherbezza turbinas neumaticas para sembradoras"
                fill
                style={{ objectFit: "contain" }}
                priority
                placeholder="blur"
                blurDataURL="/images/layouts/inicio/globalPresence/globalPresence.webp"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </CenterDiv>
      </PageSection>
      <style jsx>{`
        section {
          width: 100%;
          background-color: ${theme.secondary.greyBackground};
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .text_container {
          width: 40%;
        }
        .text_container h2 {
          width: 15ch;
          font-size: 70px;
          color: ${theme.primary.red};
          line-height: 110%;
        }
        .text_container p {
          font-size: 24px;
          font-weight: 200;
        }
        .image_container {
          width: 50%;
          height: 100%;
          min-height: 500px;
          position: relative;
        }
        @media screen and (max-width: 1920px) {
          .text_container p {
            font-size: var(--d-text-fontsize);
          }
        }
        @media screen and (max-width: 1000px) {
          .container {
            flex-direction: column;
          }
          .text_container {
            width: 100%;
          }
          .image_container {
            width: 100%;
          }
        }
        @media screen and (max-width: 600px) {
          .image_container {
            min-height: 350px;
          }
          .text_container p {
            font-size: var(--s-text-fontsize);
          }
        }
        @media screen and (max-width: 400px) {
          .image_container {
            min-height: 280px;
          }
        }
      `}</style>
    </>
  );
}

export default GlobalPresence;
