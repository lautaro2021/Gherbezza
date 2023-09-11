"use client";
import React from "react";
import Image from "next/image";

import CenterDiv from "@/app/components/center-div";
import PageSection from "@/app/components/page-section";
import SectionTitles from "@/app/components/section-titles";

import { theme } from "@/app/common/styles/themes/theme";
import Button from "@/app/components/button/button";

function ContactUs() {
  return (
    <>
      <PageSection
        backgroundColor={theme.secondary.greyBackground}
        height
        maxHeight
      >
        <CenterDiv>
          <div className="container">
            <div className="text_container">
              <SectionTitles
                text="Comunicate con nosotros"
                colorText={theme.primary.lightGreen}
              />
              <p>
                Nuestro equipo de expertos está a tu disposición para responder
                a tus consultas y atender tus necesidades de manera profesional
                y eficiente. Tu satisfacción es nuestro compromiso.
              </p>
              <Button text="Contactanos" />
            </div>
            <div className="image_container">
              <Image
                src="/images/layouts/servicios/contactanos-bg.png"
                alt="Asesoramiento tecnico - Gherbezza fabrica de turbinas para sembradoras"
                title="Gherbezza, nuestros servicios - asesoramiento tecnico"
                fill
                style={{ objectFit: "contain" }}
                placeholder="blur"
                blurDataURL="/images/layouts/servicios/contactanos-bg.png"
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
        }
        p {
          font-size: 24px;
          font-weight: 200;
          margin-top: 12px;
          max-width: 50ch;
        }
      `}</style>
    </>
  );
}

export default ContactUs;
