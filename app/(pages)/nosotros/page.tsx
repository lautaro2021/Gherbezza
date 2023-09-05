import React from "react";

import Hero from "@/app/layouts/nosotros/Hero";
import OurHistory from "@/app/layouts/nosotros/ourHistory/ourHistory";
import OurTour from "@/app/layouts/nosotros/ourHistory/ourTour";
import Banner from "@/app/layouts/nosotros/banner/us-banner";

function page() {
  return (
    <main>
      <Hero />
      <OurHistory />
      <OurTour />
      <Banner />
    </main>
  );
}

export default page;
