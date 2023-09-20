import React from "react";

import Contacto from "@/app/layouts/contacto/contacto";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contactanos | Gherbezza - Turbinas neumáticas para sembradoras",
  description:
    "Bienvenido a la fábrica de turbinas neumáticas para sembradoras en Rosario, Santa Fe. Descubre nuestras avanzadas turbinas neumáticas para agricultura de precisión. Nuestros productos de alta calidad mejoran la eficiencia en la siembra, impulsando la productividad agrícola. Explora nuestras soluciones líderes en la industria y haz que tus sembradoras sean más precisas y rentables.",
};

function Contact() {
  return (
    <main>
      <Contacto />
    </main>
  );
}

export default Contact;
