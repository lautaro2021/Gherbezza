import React from "react";

import Hero from "@/app/layouts/nosotros/Hero";
import OurHistory from "@/app/layouts/nosotros/ourHistory/ourHistory";
import OurTour from "@/app/layouts/nosotros/ourHistory/ourTour";
import Banner from "@/app/layouts/nosotros/banner/us-banner";
import KnowProducts from "@/app/layouts/nosotros/knowProducts/know-products";
import Eolo from "@/app/layouts/nosotros/knowProducts/eolo";
// import WorkWithUs from "@/app/layouts/nosotros/workWithUs/workWithUs";
import Map from "@/app/layouts/nosotros/map";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros | Gherbezza - Turbinas neumáticas para sembradoras",
  description:
    "Bienvenido a la fábrica de turbinas neumáticas para sembradoras en Rosario, Santa Fe. Descubre nuestras avanzadas turbinas neumáticas para agricultura de precisión. Nuestros productos de alta calidad mejoran la eficiencia en la siembra, impulsando la productividad agrícola. Explora nuestras soluciones líderes en la industria y haz que tus sembradoras sean más precisas y rentables.",
};

function OurUs() {
  return (
    <main>
      <Hero />
      <OurHistory />
      <OurTour />
      <Banner />
      <KnowProducts />
      <Eolo />
      {/* <WorkWithUs /> */}
      <Map />
    </main>
  );
}

export default OurUs;
