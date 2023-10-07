import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

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
    "Conoce más sobre Gherbezza: nuestra pasión por la agricultura, nuestra historia y nuestra visión. Descubre por qué somos líderes en la fabricación de turbinas neumáticas para sembradoras.",
};

function OurUs() {
  return (
    <>
      <Head>
        <meta
          property="og:title"
          content="Acerca de Gherbezza - Nuestra Pasión por la Agricultura"
        />
        <meta
          property="og:description"
          content="Conoce más sobre Gherbezza, nuestra pasión por la agricultura y nuestra visión. Descubre por qué somos líderes en la fabricación de turbinas neumáticas para sembradoras."
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta
          property="og:url"
          content="https://gherbezza.vercel.app/nosotros"
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/ogimage.png" />
      </Head>
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
    </>
  );
}

export default OurUs;
