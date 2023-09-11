import React from "react";

import Hero from "@/app/layouts/servicios/hero";
import OurServices from "@/app/layouts/servicios/ourServices/ourServices";
import ContactUs from "@/app/layouts/servicios/contactUs/contactUs";

function page() {
  return (
    <main>
      <Hero />
      <OurServices />
      <ContactUs />
    </main>
  );
}

export default page;
