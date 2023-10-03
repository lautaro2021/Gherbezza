"use client";
import React from "react";

import CenterDiv from "@/app/components/center-div";
import PageSection from "@/app/components/page-section";
import SectionTitles from "@/app/components/titles/section-titles";

import { theme } from "@/app/common/styles/themes/theme";
import Button from "@/app/components/button/button";

function ContactUs() {
  return (
    <>
      <PageSection height maxHeight>
        <CenterDiv
          backgroundColor={theme.primary.darkGreen}
          padding="50px"
          backgroundImage
          backgroundURL="/images/layouts/servicios/contactanos-bg.webp"
        >
          <div className="container">
            <div className="text_container">
              <SectionTitles
                text="Comunicate con nosotros"
                colorText={theme.secondary.white}
              />
              <p>
                Nuestro equipo de expertos está a tu disposición para responder
                a tus consultas y atender tus necesidades de manera profesional
                y eficiente. Tu satisfacción es nuestro compromiso.
              </p>
              <Button
                text="Contactanos"
                textColor={theme.secondary.white}
                link="/contacto"
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
          justify-content: center;
        }
        .text_container {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
        }
        .image_container {
          flex: 1;
          height: 400px;
          position: relative;
          overflow: hidden;
        }
        img {
          position: absolute;
          right: 0;
          top: 0;
          width: 100%;
          height: 100%;
          transform: translateY(-50%);
          height: 450px;
        }
        p {
          font-size: 24px;
          font-weight: 200;
          margin-top: 12px;
          max-width: 50ch;
          color: white;
        }
        @media screen and (max-width: 1920px) {
          p {
            font-size: var(--d-text-fontsize);
          }
        }
        @media screen and (max-width: 1530px) {
          .container {
            padding: 50px 0px;
          }
        }
        @media screen and (max-width: 760px) {
          p {
            font-size: var(--s-text-fontsize);
          }
          .container {
            padding: 20px 0px;
          }
        }
      `}</style>
    </>
  );
}

export default ContactUs;
