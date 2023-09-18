import React from "react";

import Hero from "@/app/layouts/nosotros/Hero";
import OurHistory from "@/app/layouts/nosotros/ourHistory/ourHistory";
import OurTour from "@/app/layouts/nosotros/ourHistory/ourTour";
import Banner from "@/app/layouts/nosotros/banner/us-banner";
import KnowEolo from "@/app/layouts/nosotros/knowEolo/knowEolo";
import Eolo from "@/app/layouts/nosotros/knowEolo/eolo";
import WorkWithUs from "@/app/layouts/nosotros/workWithUs/workWithUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nosotros",
  description: "",
};

function OurUs() {
  return (
    <main>
      <Hero />
      <OurHistory />
      <OurTour />
      <Banner />
      <KnowEolo />
      <Eolo />
      <WorkWithUs />
    </main>
  );
}

export default OurUs;
