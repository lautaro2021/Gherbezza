import { theme } from "@/app/common/styles/themes/theme";
import Button from "@/app/components/button/button";
import CenterDiv from "@/app/components/center-div";
import React from "react";
import PageSection from "@/app/components/page-section";

function OurServices() {
  return (
    <>
      <PageSection backgroundColor={theme.secondary.greyBackground}>
        <CenterDiv>
          <div className="title_container">
            <div></div>
            <h2>Servicios clave</h2>
          </div>
          <div className="service">
            <img src="/images/layouts/inicio/ourServices/imagen.png" />
            <div className="service_info_container">
              <h3>Postventa</h3>
              <p>
                Ofrecemos un servicio postventa de calidad y eficiente para
                garantizar la plena satisfacción con nuestras turbinas
                neumáticas para sembradoras.
              </p>
              <br />
              <br />
              <Button
                bordered={true}
                text="Ver más"
                textColor={theme.secondary.white}
                link="/servicios"
              />
            </div>
          </div>
        </CenterDiv>
      </PageSection>
      <style jsx>{`
        section {
          width: 100%;
          height: 100dvh;
          background-color: ${theme.secondary.greyBackground};
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .title_container {
          padding: 20px 50px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .title_container h2 {
          font-size: 70px;
          color: ${theme.primary.lightGreen};
          font-weight: bold;
          width: 40%;
        }
        .service {
          width: 100%;
          height: 100%;
          max-height: 500px;
          background-color: ${theme.primary.lightGreen};
          padding: 20px 50px;
          display: flex;
          align-items: flex-start;
          justify-content: flex-end;
          position: relative;
        }
        .service_info_container {
          display: flex;
          flex-direction: column;
          color: ${theme.secondary.white};
          width: 40%;
        }
        .service_info_container h3 {
          font-size: 70px;
          font-weight: bold;
        }
        .service_info_container p {
          width: max(100%, 6ch);
          font-size: var(--desktop-text-fontsize);
        }
        img {
          height: 600px;
          position: absolute;
          left: 50px;
          bottom: 50px;
        }
      `}</style>
    </>
  );
}

export default OurServices;
