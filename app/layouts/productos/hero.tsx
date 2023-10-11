"use client";
import React from "react";
import Image from "next/image";

import CenterDiv from "@/app/components/center-div";
import { theme } from "@/app/common/styles/themes/theme";
import HeroTitles from "@/app/components/titles/hero-titles";
import RouteText from "@/app/components/routeText";

function Hero() {
  return (
    <>
      <section>
        <Image
          alt="Background - Productos"
          src="https://res.cloudinary.com/dn72zz8r5/image/upload/v1696614708/GHERBEZZA/PRODUCTOS/productos-bg_q2tlks.webp"
          placeholder="blur"
          blurDataURL="https://res.cloudinary.com/dn72zz8r5/image/upload/v1696614708/GHERBEZZA/PRODUCTOS/productos-bg_q2tlks.webp"
          quality={100}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{
            objectFit: "cover",
            filter: "brightness(0.3)",
          }}
          priority
        />
        <CenterDiv>
          <div className="container">
            <RouteText linkedText="INICIO" text="PRODUCTOS" />
            <HeroTitles
              text="NUESTROS PRODUCTOS"
              colorText={theme.secondary.white}
            />
          </div>
        </CenterDiv>
      </section>
      <style jsx>{`
        section {
          width: 100%;
          height: 70dvh;
          max-height: 768px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .container {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
        }
        p {
          color: ${theme.secondary.lightGrey};
          font-size: 24px;
          max-width: 80ch;
          padding-top: 12px;
        }
      `}</style>
    </>
  );
}

export default Hero;
