import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const Contacto = dynamic(() => import("@/app/layouts/contacto/contacto"));
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contactanos | Gherbezza - Turbinas neumáticas para sembradoras",
  description:
    "¿Listo para hablar con nosotros? Utiliza nuestro formulario de contacto para ponerte en contacto con el equipo de Gherbezza. Estamos aquí para responder a tus preguntas y brindarte el mejor soporte posible.",
};

function Contact() {
  return (
    <>
      <Head>
        <meta
          property="og:title"
          content="Contacto Gherbezza - Formulario de Contacto"
        />
        <meta
          property="og:description"
          content="¿Listo para hablar con nosotros? Utiliza nuestro formulario de contacto para ponerte en contacto con el equipo de Gherbezza. Estamos aquí para responder a tus preguntas y brindarte el mejor soporte posible."
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta
          property="og:url"
          content="https://gherbezza.vercel.app/contacto"
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/ogimage.png" />
      </Head>
      <main>
        <Contacto />
      </main>
    </>
  );
}

export default Contact;
