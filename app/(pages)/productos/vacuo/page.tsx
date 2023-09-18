import React from "react";

import ProductDetail from "@/app/components/product/product-detail";

import { productData } from "@/app/common/utils/products/product-description/data";

function Vacuo() {
  return (
    <main>
      <ProductDetail
        title={productData.vacuo.title}
        imageUrl={productData.vacuo.imageUrl}
        subtitle={productData.vacuo.subtitle}
        description={productData.vacuo.description}
        altDescription={productData.vacuo.altDescription}
        dataSheetLink={productData.vacuo.dataSheetLink}
      />
    </main>
  );
}

export default Vacuo;
