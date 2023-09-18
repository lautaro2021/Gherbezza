import React from "react";

import ProductDetail from "@/app/components/product/product-detail";
import Variants from "@/app/layouts/productos/eolo/variants";
import OptionalsAndAccesories from "@/app/layouts/productos/eolo/optionals-accesories";

import { productData } from "@/app/common/utils/products/product-description/data";

function Eolo() {
  return (
    <main>
      <ProductDetail
        title={productData.eolo.title}
        imageUrl={productData.eolo.imageUrl}
        subtitle={productData.eolo.subtitle}
        description={productData.eolo.description}
        altDescription={productData.eolo.altDescription}
        dataSheetLink={productData.eolo.dataSheetLink}
      />
      <Variants />
      <OptionalsAndAccesories />
    </main>
  );
}

export default Eolo;
