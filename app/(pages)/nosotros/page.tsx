import React from "react";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/app/layouts/nosotros/Hero"));
const OurHistory = dynamic(
  () => import("@/app/layouts/nosotros/ourHistory/ourHistory")
);
const OurTour = dynamic(
  () => import("@/app/layouts/nosotros/ourHistory/ourTour")
);
const Banner = dynamic(() => import("@/app/layouts/nosotros/banner/us-banner"));
const KnowProducts = dynamic(
  () => import("@/app/layouts/nosotros/knowProducts/know-products")
);
const Eolo = dynamic(() => import("@/app/layouts/nosotros/knowProducts/eolo"));
const WorkWithUs = dynamic(
  () => import("@/app/layouts/nosotros/workWithUs/workWithUs")
);

import { Metadata } from "next";

const MapDirection = dynamic(() => import("@/app/layouts/nosotros/map/index"), {
  ssr: false,
});

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
      <WorkWithUs />
      <MapDirection />
    </main>
  );
}

export default OurUs;
