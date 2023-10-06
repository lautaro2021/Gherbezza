"use client";
import React from "react";
import Image from "next/image";

import CenterDiv from "@/app/components/center-div";
import SectionTitles from "@/app/components/titles/section-titles";
import PageSection from "@/app/components/page-section";

import { theme } from "@/app/common/styles/themes/theme";
import { listServicesData } from "@/app/common/utils/list-services";
import { ServicesDescriptionType } from "@/app/types/list-services.types";

function OurServices() {
  return (
    <>
      <PageSection height maxHeight>
        <CenterDiv>
          <div className="container at">
            <SectionTitles
              text="Asesoramiento técnico"
              colorText={theme.primary.lightGreen}
              fontSize="45px"
            />
            <div className="service_container">
              <article>
                <h4>Nuestra Misión</h4>
                <br />
                <p>
                  Nuestra misión es superar las expectativas de nuestros
                  clientes en cada interacción. Estamos dedicados a brindar
                  soluciones rápidas y efectivas, así como asesoramiento
                  experto, para garantizar que sus turbinas funcionen de manera
                  óptima en todo momento. Su éxito es nuestro éxito.
                </p>
                <br />
                <h4>¿Qué ofrecemos en nuestro servicio?</h4>
                <ul>
                  {listServicesData.asesoramientoTecnico?.map(
                    (service: ServicesDescriptionType, index: number) => (
                      <li key={index}>
                        <strong>{service.strong}</strong>
                        &nbsp;{service.text}
                      </li>
                    )
                  )}
                </ul>
              </article>
              <aside>
                <Image
                  src="https://res.cloudinary.com/dn72zz8r5/image/upload/v1696616110/GHERBEZZA/SERVICIOS/asesoramiento-tecnico_ftjq9z.webp"
                  alt="Asesoramiento tecnico - Gherbezza fabrica de turbinas para sembradoras"
                  title="Gherbezza, nuestros servicios - asesoramiento tecnico"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </aside>
            </div>
          </div>
          <div className="container sp">
            <SectionTitles
              text="Servicio de postventa"
              colorText={theme.primary.lightGreen}
              fontSize="45px"
            />
            <div className="service_container inverted">
              <article className="sp_article">
                <h4>Nuestra Misión</h4>
                <br />
                <p>
                  Nuestra misión es superar las expectativas de nuestros
                  clientes en cada interacción. Estamos dedicados a brindar
                  soluciones rápidas y efectivas, así como asesoramiento
                  experto, para garantizar que sus turbinas funcionen de manera
                  óptima en todo momento. Su éxito es nuestro éxito.
                </p>
                <br />
                <h4>¿Qué ofrecemos en nuestro servicio?</h4>
                <ul>
                  {listServicesData.asesoramientoTecnico?.map(
                    (service: ServicesDescriptionType, index: number) => (
                      <li key={index}>
                        <strong>{service.strong}</strong>
                        &nbsp;{service.text}
                      </li>
                    )
                  )}
                </ul>
              </article>
              <aside>
                <Image
                  src="https://res.cloudinary.com/dn72zz8r5/image/upload/v1696616109/GHERBEZZA/SERVICIOS/postventa_as44e1.webp"
                  alt="Asesoramiento tecnico - Gherbezza fabrica de turbinas para sembradoras"
                  title="Gherbezza, nuestros servicios - asesoramiento tecnico"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </aside>
            </div>
          </div>
        </CenterDiv>
      </PageSection>
      <style jsx>{`
        .container {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .service_container {
          width: 100%;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          margin-top: 20px;
        }
        article {
          flex: 2;
          font-size: 22px;
          padding: 20px 20px 0px 0px;
        }
        .sp_article {
          padding: 20px 0px 0px 20px;
        }
        p,
        li {
          font-weight: 200;
          font-size: 20px;
        }
        ul {
          margin: 15px 0px 0px 15px;
        }
        li {
          list-style: none;
          margin: 5px 0px;
          color: ${theme.secondary.darkGrey};
        }
        li strong {
          font-weight: 400;
          color: ${theme.secondary.black};
        }
        aside {
          flex: 1;
          min-height: 460px;
          position: relative;
        }
        .sp {
          margin-top: 100px;
        }
        .inverted {
          flex-direction: row-reverse;
        }
        @media screen and (max-width: 1920px) {
          h4 {
            font-size: clamp(20px, 1.146vw, 22px);
          }
          p,
          li {
            font-size: clamp(18px, 1.042vw, 20px);
          }
        }
        @media screen and (max-width: 1000px) {
          aside {
            display: none;
          }
          h4 {
            font-size: clamp(18px, 2vw, 20px);
          }
          p,
          li {
            font-size: clamp(16px, 1.8vw, 18px);
          }
          .sp {
            margin-top: 50px;
          }
          article,
          .sp_article {
            padding: 0;
          }
        }
        @media screen and (max-width: 760px) {
          p,
          li {
            font-size: clamp(14px, 2.105vw, 16px);
          }
        }
      `}</style>
    </>
  );
}

export default OurServices;
