import Hero from "../layouts/Inicio/Hero";
import Banner from "../layouts/Inicio/banner/banner";
import OurCompany from "../layouts/Inicio/ourCompany/ourCompany";
import OurServices from "../layouts/Inicio/ourServices/ourServices";
import OurClients from "../layouts/Inicio/ourClients/ourClients";
import GlobalPresence from "../layouts/Inicio/globalPresence/globalPresence";
import BePartOfUs from "../layouts/Inicio/bePartOfUs/bePartOfUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inicio | Gherbezza - Turbinas neumáticas para sembradoras",
  description:
    "Bienvenido a la fábrica de turbinas neumáticas para sembradoras en Rosario, Santa Fe. Descubre nuestras avanzadas turbinas neumáticas para agricultura de precisión. Nuestros productos de alta calidad mejoran la eficiencia en la siembra, impulsando la productividad agrícola. Explora nuestras soluciones líderes en la industria y haz que tus sembradoras sean más precisas y rentables.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Banner />
      <OurCompany />
      <OurServices />
      <OurClients />
      <GlobalPresence />
      <BePartOfUs />
    </main>
  );
}
