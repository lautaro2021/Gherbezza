"use client";
import { theme } from "@/app/common/styles/themes/theme";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import CenterDiv from "@/app/components/center-div";
import PageSection from "@/app/components/page-section";
import Button from "@/app/components/button/button";
import SectionTitles from "@/app/components/titles/section-titles";

function BePartOfUs() {
  return (
    <>
      <PageSection>
        <CenterDiv>
          <div className="container">
            <div className="image_container">
              <Image
                src="/images/layouts/inicio/bePartOfUs/partOfUs.png"
                alt="Trabaja con nostros Gherbezza turbinas neumaticas para sembradoras"
                title="Trabaja con nostros Gherbezza turbinas neumaticas para sembradoras"
                fill
                style={{ objectFit: "cover" }}
                priority
                placeholder="blur"
                blurDataURL="/images/layouts/inicio/bePartOfUs/partOfUs.png"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <img
                src="/images/layouts/inicio/bePartOfUs/operario.png"
                alt="operario - trabaja con nosotros - gherbezza turbinas neumaticas para sembradoras"
                title="trabaja con nosotros"
              />
            </div>
            <div className="text_container">
              <SectionTitles text="Forma parte del equipo" />
              <br />
              <p>
                Forma parte de nuestro equipo líder en la fabricación de
                turbinas para sembradoras. Únete a una comunidad apasionada que
                impulsa la agricultura moderna a través de la innovación.
              </p>
              <Button
                link="/nosotros#work"
                text="Unite"
                textColor={theme.secondary.black}
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
        }
        .image_container {
          width: 40%;
          height: 600px;
          position: relative;
        }
        .image_container img {
          z-index: 1000;
          position: absolute;
          bottom: -30px;
          right: -4vw;
        }
        .text_container {
          width: 40%;
          display: flex;
          flex-direction: column;
          align-items: space-between;
          justify-content: center;
        }
        .text_container p {
          font-size: 24px;
          font-weight: 200;
        }
      `}</style>
    </>
  );
}

export default BePartOfUs;
