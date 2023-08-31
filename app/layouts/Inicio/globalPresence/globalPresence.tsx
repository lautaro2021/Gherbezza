import { theme } from "@/app/common/styles/themes/theme";
import Image from "next/image";
import CenterDiv from "@/app/components/center-div";
import React from "react";

function GlobalPresence() {
  return (
    <>
      <section id="pagesection">
        <CenterDiv>
          <div className="container">
            <div className="text_container">
              <h2>Nuestra presencia global</h2>
              <br />
              <p>
                Durante 20 años, hemos forjado alianzas en todo el mundo. Desde
                España e Italia hasta Brasil, Francia y Sudafrica, nuestro
                impacto internacional en la fabricación de turbinas para
                sembradoras es evidente. Conectando países, cultivamos éxito
                agrícola global.
              </p>
            </div>
            <div className="image_container">
              <Image
                src="/images/layouts/inicio/globalPresence/globalPresence.png"
                alt="nuestra presencia global Gherbezza turbinas neumaticas para sembradoras"
                title="nuestra presencia global Gherbezza turbinas neumaticas para sembradoras"
                fill
                objectFit="contain"
              />
            </div>
          </div>
        </CenterDiv>
      </section>
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
          font-size: var(--desktop-text-fontsize);
          font-weight: 200;
        }
        .image_container {
          width: 50%;
          height: 100%;
          min-height: 500px;
          position: relative;
        }
      `}</style>
    </>
  );
}

export default GlobalPresence;
