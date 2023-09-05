"use client";
import React from "react";

import { theme } from "@/app/common/styles/themes/theme";
import HeroTitles from "@/app/components/hero-titles";

function Hero() {
  return (
    <>
      <section>
        <HeroTitles
          text="NUESTRA EMPRESA"
          fontSize="80px"
          colorText={theme.secondary.white}
        />
      </section>
      <style jsx>{`
        section {
          width: 100%;
          height: 100dvh;
          background-size: cover;
          background-position: center;
          background-image: linear-gradient(
              rgba(0, 0, 0, 0.5),
              rgba(0, 0, 0, 0.5)
            ),
            url("/images/layouts/nosotros/Hero/background.webp");
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </>
  );
}

export default Hero;
