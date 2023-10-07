"use client";
import React from "react";

import { theme } from "@/app/common/styles/themes/theme";
import CenterDiv from "@/app/components/center-div";
import SectionTitles from "@/app/components/titles/section-titles";
import PageSection from "@/app/components/page-section";
import Button from "@/app/components/button/button";
import Image from "next/image";

function OurCompany() {
  return (
    <>
      <PageSection>
        <CenterDiv>
          <div className="container">
            <div className="text_container">
              <SectionTitles text="Nuestra empresa" />
              <p>
                Nace en el año 2003, en la ciudad de Rosario, con el objetivo
                principal de brindar soluciones a la industria de maquinaria
                agrícola mediante el desarrollo de piezas para el agro. En este
                contexto, GHERBEZZA inicia un camino importante en la
                fabricación de turbinas para sembradoras y comienza a introducir
                las primeras piezas nacionales en el mercado interno.
              </p>
              <Button
                text="Ver más"
                textColor={theme.secondary.black}
                link="/nosotros"
              />
            </div>
            <div className="image_container">
              <Image
                src="https://res.cloudinary.com/dn72zz8r5/image/upload/v1696613861/GHERBEZZA/INICIO/ourCompany_cqm5gp.webp"
                alt="Gherbezza fabrica de turbinas neumaticas para sembradoras"
                title="Gherbezza turbinas neumaticas para sembradoras"
                fill
                style={{ objectFit: "cover" }}
                placeholder="blur"
                blurDataURL="https://res.cloudinary.com/dn72zz8r5/image/upload/v1696613861/GHERBEZZA/INICIO/ourCompany_cqm5gp.webp"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="lazy"
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
        .text_container {
          width: 50%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          text-align: start;
          gap: 15px;
        }
        .text_container p {
          font-size: var(--bd-text-fontsize);
          font-weight: 200;
        }
        .image_container {
          width: 40%;
          height: 100%;
          position: relative;
        }
        @media screen and (max-width: 1920px) {
          .text_container p {
            font-size: var(--d-text-fontsize);
          }
        }
        @media screen and (max-width: 1000px) {
          .container {
            flex-direction: column-reverse;
          }
          .text_container {
            width: 100%;
          }
          .image_container {
            width: 100%;
          }
        }
        @media screen and (max-width: 600px) {
          .text_container p {
            font-size: var(--s-text-fontsize);
          }
        }
      `}</style>
    </>
  );
}

export default OurCompany;
