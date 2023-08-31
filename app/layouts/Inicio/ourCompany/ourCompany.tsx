import React from "react";

import { theme } from "@/app/common/styles/themes/theme";
import CenterDiv from "@/app/components/center-div";
import Button from "@/app/components/button/button";
import Image from "next/image";

function OurCompany() {
  return (
    <>
      <section id="pagesection">
        <CenterDiv>
          <div className="container">
            <div className="text_container">
              <h2>Nuestra empresa</h2>
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
                src="/images/layouts/inicio/ourCompany/ourCompany.JPG"
                alt="Gherbezza fabrica de turbinas neumaticas para sembradoras"
                title="Gherbezza turbinas neumaticas para sembradoras"
                fill
                objectFit="cover"
                placeholder="blur"
                blurDataURL="/images/layouts/inicio/ourCompany/ourCompany.png"
                priority
              />
            </div>
          </div>
        </CenterDiv>
      </section>
      <style jsx>{`
        section {
          width: 100%;
          height: 100vh;
          background-color: ${theme.secondary.white};
          display: flex;
          align-items: center;
          justify-content: center;
        }
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
        .text_container h2 {
          font-size: 70px;
          color: ${theme.primary.lightGreen};
          font-weight: bold;
        }
        .text_container p {
          font-size: 24px;
          font-weight: 200;
        }
        .image_container {
          width: 40%;
          height: 100%;
          position: relative;
        }
      `}</style>
    </>
  );
}

export default OurCompany;
