import React from "react";

import Contacto from "@/app/layouts/contacto/contacto";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contactanos",
  description: "",
};

function Contact() {
  return (
    <main>
      <Contacto />
    </main>
  );
}

export default Contact;
