import dynamic from "next/dynamic";
import Head from "next/head";

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
    "Descubre las turbinas neumáticas de vanguardia de Gherbezza, diseñadas para potenciar tus sembradoras en el campo. Mejora la eficiencia de tus cultivos con nuestra tecnología líder en la industria. ¡Optimiza tu siembra hoy mismo y explora nuestra gama de productos en Gherbezza!",
};

export default function Home() {
  return (
    <>
      <Head>
        <meta
          property="og:title"
          content="Gherbezza - Turbinas Neumáticas para Sembradoras"
        />
        <meta
          property="og:description"
          content="Optimiza tus cultivos con nuestras turbinas neumáticas de vanguardia. Descubre cómo Gherbezza puede ayudarte en la agricultura."
        />
        <meta
          property="og:image"
          content="https://gherbezza.vercel.app/og-image.png"
        />
        <meta property="og:url" content="https://gherbezza.vercel.app/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://gherbezza.vercel.app/og-image.png"
        />
      </Head>
      <main>
        <Hero />
        <Banner />
        <OurCompany />
        <OurServices />
        <OurClients />
        <GlobalPresence />
        <BePartOfUs />
      </main>
    </>
  );
}
