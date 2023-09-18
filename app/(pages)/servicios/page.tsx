import React from "react";
import type { Metadata } from "next";

import Hero from "@/app/layouts/servicios/hero";
import OurServices from "@/app/layouts/servicios/ourServices/ourServices";
import ContactUs from "@/app/layouts/servicios/contactUs/contactUs";

export const metadata: Metadata = {
  title: "Nuestros Servicios",
  description: "",
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
