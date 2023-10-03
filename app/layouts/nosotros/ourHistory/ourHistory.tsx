"use client";
import React from "react";
import Image from "next/image";

import CenterDiv from "@/app/components/center-div";
import PageSection from "@/app/components/page-section";
import SectionTitles from "@/app/components/titles/section-titles";
import { theme } from "@/app/common/styles/themes/theme";

function OurHistory() {
  return (
    <>
      <PageSection maxHeight height>
        <CenterDiv>
          <SectionTitles text="Un poco de historia" centeredText />
          <div className="container">
            <div className="image_container">
              <Image
                src="/images/layouts/nosotros/ourHistory/company.webp"
                alt="Nuestra empresa - Gherbezza fabrica de turbinas neumaticas para sembradoras"
                title="Nuestra empresa - Gherbezza turbinas neumaticas para sembradoras"
                fill
                style={{ objectFit: "cover" }}
                placeholder="blur"
                blurDataURL="/images/layouts/nosotros/ourHistory/company.webp"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="text_container">
              <h6>Inicios</h6>
              <p>
                En el año 2003, Gherbezza se estableció en Rosario con la misión
                de proporcionar soluciones a la industria de maquinaria
                agrícola, centrándose en la fabricación de turbinas para
                sembradoras. Rápidamente se convirtió en el proveedor exclusivo
                de importantes fabricantes de sembradoras en el mercado
                nacional. Hoy, Gherbezza ofrece una amplia gama de turbinas que
                abarcan todas las categorías de sembradoras y ha invertido en
                tecnología de vanguardia para mantener estándares de calidad
                excepcionales. Su historia es un testimonio de su compromiso con
                la excelencia en la industria agrícola.
              </p>
              <br />
              <h6>Actualidad</h6>
              <p>
                En la actualidad, Gherbezza es un líder indiscutible en el
                mercado de turbinas para sembradoras, respaldado por
                instalaciones de vanguardia y un equipo altamente especializado,
                lo que garantiza la satisfacción de las demandas del mercado en
                todas las etapas de fabricación de sus productos. Su evolución
                desde su fundación hasta hoy demuestra su compromiso continuo
                con la innovación y la calidad en la industria agrícola.
              </p>
            </div>
          </div>
        </CenterDiv>
      </PageSection>
      <style jsx>{`
        .container {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: space-between;
          margin-top: 50px;
        }
        .image_container {
          width: 45%;
          max-height: 600px;
          position: relative;
        }
        .text_container {
          width: 50%;
        }
        .text_container p {
          font-size: 24px;
          font-weight: 200;
        }
        h6 {
          font-size: 30px;
          color: ${theme.primary.lightGreen};
        }
        @media screen and (max-width: 1920px) {
          .text_container p {
            font-size: var(--d-text-fontsize);
          }
          .image_container {
            max-height: clamp(400px, 31vw, 600px);
          }
          h6 {
            font-size: clamp(24px, 1.5vw, 30px);
          }
        }
        @media screen and (max-width: 1000px) {
          .container {
            flex-direction: column;
          }
          .image_container {
            width: 100%;
            height: 400px;
          }
          .text_container {
            width: 100%;
            padding: 12px 0px;
          }
        }
        @media screen and (max-width: 600px) {
          h6 {
            font-size: clamp(20px, 5vw, 24px);
          }
          .text_container p {
            font-size: var(--s-text-fontsize);
          }
          .image_container {
            height: 300px;
          }
        }
      `}</style>
    </>
  );
}

export default OurHistory;
