import React from "react";

import ProductDetail from "@/app/components/product/product-detail";
import Variants from "@/app/layouts/productos/eolo/variants";
import OptionalsAndAccesories from "@/app/layouts/productos/eolo/optionals-accesories";

import { productsCarouselData } from "@/app/common/utils/products/carousel-info";
import { productData } from "@/app/common/utils/products/product-description/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Nuestros productos - Eolo | Gherbezza - Turbinas neumáticas para sembradoras",
  description:
    "Bienvenido a la fábrica de turbinas neumáticas para sembradoras en Rosario, Santa Fe. Descubre nuestras avanzadas turbinas neumáticas para agricultura de precisión. Nuestros productos de alta calidad mejoran la eficiencia en la siembra, impulsando la productividad agrícola. Explora nuestras soluciones líderes en la industria y haz que tus sembradoras sean más precisas y rentables.",
};

function Eolo() {
  const { eolo } = productsCarouselData;
  return (
    <main>
      <ProductDetail
        title={productData.eolo.title}
        subtitle={productData.eolo.subtitle}
        description={productData.eolo.description}
        dataSheetLink={productData.eolo.dataSheetLink}
        dataForCarrousel={eolo}
      />
      <Variants />
      <OptionalsAndAccesories />
    </main>
  );
}

export default Eolo;
