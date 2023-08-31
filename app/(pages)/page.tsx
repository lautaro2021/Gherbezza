"use client";
import React from "react";

import Hero from "../layouts/Inicio/Hero";
import Banner from "../layouts/Inicio/banner/banner";
import OurCompany from "../layouts/Inicio/ourCompany/ourCompany";
import OurServices from "../layouts/Inicio/ourServices/ourServices";
import OurClients from "../layouts/Inicio/ourClients/ourClients";
import GlobalPresence from "../layouts/Inicio/globalPresence/globalPresence";

export default function Home() {
  return (
    <>
      <Hero />
      <Banner />
      <OurCompany />
      <OurServices />
      {/* <OurClients /> */}
      <GlobalPresence />
    </>
  );
}
