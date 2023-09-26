import React from "react";

import ProductDetail from "@/app/components/product/product-detail";

import { productData } from "@/app/common/utils/products/product-description/data";
import { productsCarouselData } from "@/app/common/utils/products/carousel-info";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Nuestros productos - Vacuo | Gherbezza - Turbinas neumáticas para sembradoras",
  description:
    "Bienvenido a la fábrica de turbinas neumáticas para sembradoras en Rosario, Santa Fe. Descubre nuestras avanzadas turbinas neumáticas para agricultura de precisión. Nuestros productos de alta calidad mejoran la eficiencia en la siembra, impulsando la productividad agrícola. Explora nuestras soluciones líderes en la industria y haz que tus sembradoras sean más precisas y rentables.",
};

function Vacuo() {
  const { vacuo } = productsCarouselData;
  return (
    <main>
      <ProductDetail
        title={productData.vacuo.title}
        subtitle={productData.vacuo.subtitle}
        description={productData.vacuo.description}
        dataSheetLink={productData.vacuo.dataSheetLink}
        dataForCarrousel={vacuo}
      />
    </main>
  );
}

export default Vacuo;
