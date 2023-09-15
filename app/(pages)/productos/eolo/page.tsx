import React from "react";

import ProductDetail from "@/app/layouts/productos/eolo/product-detail";
import Variants from "@/app/layouts/productos/eolo/variants";
import OptionalsAndAccesories from "@/app/layouts/productos/eolo/optionals-accesories";

function Eolo() {
  return (
    <>
      <ProductDetail />
      <Variants />
      <OptionalsAndAccesories />
    </>
  );
}

export default Eolo;
