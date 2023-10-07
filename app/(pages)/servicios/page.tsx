import React from "react";
import dynamic from "next/dynamic";
import type { Metadata } from "next";

const Hero = dynamic(() => import("@/app/layouts/servicios/hero"));
const OurServices = dynamic(
  () => import("@/app/layouts/servicios/ourServices/ourServices")
);
const ContactUs = dynamic(
  () => import("@/app/layouts/servicios/contactUs/contactUs")
);

export const metadata: Metadata = {
  title:
    "Nuestros Servicios | Gherbezza - Turbinas neumáticas para sembradoras",
  description:
    "Bienvenido a la fábrica de turbinas neumáticas para sembradoras en Rosario, Santa Fe. Descubre nuestras avanzadas turbinas neumáticas para agricultura de precisión. Nuestros productos de alta calidad mejoran la eficiencia en la siembra, impulsando la productividad agrícola. Explora nuestras soluciones líderes en la industria y haz que tus sembradoras sean más precisas y rentables.",
};

function Services() {
  return (
    <main>
      <Hero />
      <OurServices />
      <ContactUs />
    </main>
  );
}

export default Services;
