import React from "react";

import ProductDetail from "@/app/components/product/product-detail";
import { productData } from "@/app/common/utils/products/product-description/data";

function Airdrill() {
  return (
    <main>
      <ProductDetail
        title={productData.airdrill.title}
        imageUrl={productData.airdrill.imageUrl}
        subtitle={productData.airdrill.subtitle}
        description={productData.airdrill.description}
        altDescription={productData.airdrill.altDescription}
        dataSheetLink={productData.airdrill.dataSheetLink}
      />
    </main>
  );
}

export default Airdrill;
