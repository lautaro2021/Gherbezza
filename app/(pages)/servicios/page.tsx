import React from "react";
import dynamic from "next/dynamic";
import type { Metadata } from "next";
import Head from "next/head";

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
    "En Gherbezza, no solo ofrecemos productos excepcionales, sino también un servicio excepcional. Descubre nuestros servicios de atención al cliente y postventa, diseñados para respaldar tus necesidades agrícolas.",
};

function Services() {
  return (
    <>
      <Head>
        <meta
          property="og:title"
          content="Servicios de Gherbezza - Atención al Cliente y Servicio de Postventa"
        />
        <meta
          property="og:description"
          content="En Gherbezza, ofrecemos servicios excepcionales que incluyen atención al cliente y servicio de postventa. Estamos aquí para satisfacer tus necesidades agrícolas."
        />
        <meta
          property="og:image"
          content="https://gherbezza.vercel.app/og-image.png"
        />
        <meta
          property="og:url"
          content="https://gherbezza.vercel.app/servicios"
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://gherbezza.vercel.app/og-image.png"
        />
      </Head>
      <main>
        <Hero />
        <OurServices />
        <ContactUs />
      </main>
    </>
  );
}

export default Services;
