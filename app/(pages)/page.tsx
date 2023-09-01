"use client";
import React from "react";

import Hero from "../layouts/Inicio/Hero";
import Banner from "../layouts/Inicio/banner/banner";
import OurCompany from "../layouts/Inicio/ourCompany/ourCompany";
import OurServices from "../layouts/Inicio/ourServices/ourServices";
import GlobalPresence from "../layouts/Inicio/globalPresence/globalPresence";
import BePartOfUs from "../layouts/Inicio/bePartOfUs/bePartOfUs";

export default function Home() {
  return (
    <>
      <Hero />
      <Banner />
      <OurCompany />
      <OurServices />
      <GlobalPresence />
      <BePartOfUs />
    </>
  );
}
