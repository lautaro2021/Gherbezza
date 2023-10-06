import dynamic from "next/dynamic";
import Hero from "../layouts/Inicio/Hero";
const Banner = dynamic(() => import("../layouts/Inicio/banner/banner"));
const OurCompany = dynamic(
  () => import("../layouts/Inicio/ourCompany/ourCompany")
);
const OurServices = dynamic(
  () => import("../layouts/Inicio/ourServices/ourServices")
);
const OurClients = dynamic(
  () => import("../layouts/Inicio/ourClients/ourClients")
);
const GlobalPresence = dynamic(
  () => import("../layouts/Inicio/globalPresence/globalPresence")
);
const BePartOfUs = dynamic(
  () => import("../layouts/Inicio/bePartOfUs/bePartOfUs")
);
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
