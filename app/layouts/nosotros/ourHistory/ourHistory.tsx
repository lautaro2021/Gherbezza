"use client";
import React from "react";
import Image from "next/image";

import CenterDiv from "@/app/components/center-div";
import PageSection from "@/app/components/page-section";
import SectionTitles from "@/app/components/section-titles";

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
              b
            </div>
            <div className="text_container">
              <p>
                En el año 2003, GHERBEZZA se estableció en Rosario con la misión
                de proporcionar soluciones a la industria de maquinaria
                agrícola, centrándose en la fabricación de turbinas para
                sembradoras. Rápidamente se convirtió en el proveedor exclusivo
                de importantes fabricantes de sembradoras en el mercado
                nacional. Hoy, GHERBEZZA ofrece una amplia gama de turbinas que
                abarcan todas las categorías de sembradoras y ha invertido en
                tecnología de vanguardia para mantener estándares de calidad
                excepcionales. Su historia es un testimonio de su compromiso con
                la excelencia en la industria agrícola.
              </p>
              <br />
              <p>
                En la actualidad, GHERBEZZA es un líder indiscutible en el
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
          display: flex;
          justify-content: space-between;
          margin-top: 50px;
        }
        .image_container {
          aspect-ratio: 1/1;
          width: 45%;
          max-height: 600px;
          position: relative;
        }
        .text_container {
          width: 50%;
          font-size: 24px;
          font-weight: 200;
        }
      `}</style>
    </>
  );
}

export default OurHistory;
