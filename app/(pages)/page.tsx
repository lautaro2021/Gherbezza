"use client";
import React from "react";

import Hero from "../layouts/Inicio/Hero";
import Banner from "../layouts/Inicio/banner/banner";
import OurCompany from "../layouts/Inicio/ourCompany/ourCompany";
import OurServices from "../layouts/Inicio/ourServices/ourServices";

export default function Home() {
  return (
    <>
      <Hero />
      <Banner />
      <OurCompany />
      <OurServices />
    </>
  );
}
