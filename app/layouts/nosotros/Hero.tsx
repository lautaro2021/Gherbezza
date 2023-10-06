"use client";
import React from "react";
import Image from "next/image";

import { theme } from "@/app/common/styles/themes/theme";
import HeroTitles from "@/app/components/titles/hero-titles";
import CenterDiv from "@/app/components/center-div";
import RouteText from "@/app/components/routeText";

function Hero() {
  return (
    <>
      <section>
        <Image
          alt="Background - Nosotros"
          src="https://res.cloudinary.com/dn72zz8r5/image/upload/v1696615699/GHERBEZZA/NOSOTROS/background_wvpma4.webp"
          placeholder="blur"
          blurDataURL="https://res.cloudinary.com/dn72zz8r5/image/upload/v1696615699/GHERBEZZA/NOSOTROS/background_wvpma4.webp"
          quality={100}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{
            objectFit: "cover",
            filter: "brightness(0.2)",
          }}
          priority
        />
        <CenterDiv>
          <div className="container">
            <RouteText linkedText="INICIO" text="NOSOTROS" />
            <HeroTitles
              text="NUESTRA EMPRESA"
              colorText={theme.secondary.white}
            />
          </div>
        </CenterDiv>
      </section>
      <style jsx>{`
        section {
          width: 100%;
          height: 100dvh;
          max-height: 768px;
          background-size: cover;
          background-position: center;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .container {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
        }
      `}</style>
    </>
  );
}

export default Hero;
