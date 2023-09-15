"use client";
import React from "react";
import Image from "next/image";

import { theme } from "@/app/common/styles/themes/theme";
import CenterDiv from "@/app/components/center-div";
import PageSection from "@/app/components/page-section";
import SectionTitles from "@/app/components/section-titles";
import Button from "@/app/components/button/button";

function ProductDetail() {
  return (
    <>
      <PageSection>
        <CenterDiv backgroundColor={theme.secondary.greyBackground}>
          <div className="container">
            <article className="side_container">
              <div className="text_container">
                <SectionTitles
                  text="Mayor eficiencia, menor consumo"
                  colorText={theme.secondary.black}
                  fontSize="50px"
                />
                <br />
                <p>
                  Para transporte neumático en maquinaria agrícola sembradoras
                  tipo Air Drill, fertilizadoras neumáticas y cualquier otro
                  equipo agrícola que utilice sistemas de soplado de aire.
                </p>
              </div>
              <a
                href="https://drive.google.com/file/d/1myxLjONvJzA29r6-WKOszfOkucAifXD-/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <span>Ficha Técnica</span>
              </a>
            </article>
            <div className="image_container">
              <Image
                src="/images/layouts/productos/eolo/eolo.png"
                alt="Turbina Eolo - Gherbezza, fabrica de turbinas para sembradoras"
                title="Turbina Eolo"
                fill
                style={{ objectFit: "cover" }}
                placeholder="blur"
                blurDataURL="/images/layouts/productos/eolo/eolo.png"
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
          color: ${theme.primary.red};
          cursor: pointer;
        }
      `}</style>
    </>
  );
}

export default ProductDetail;
