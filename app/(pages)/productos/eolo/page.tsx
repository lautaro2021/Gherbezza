import React from "react";

import ProductDetail from "@/app/components/product/product-detail";
import Variants from "@/app/components/product/variants";
import OptionalsAndAccesories from "@/app/components/product/optionals-accesories";

import { optionalsData } from "@/app/common/utils/products/eolo/optionals/optionals-data";
import { productVariants } from "@/app/common/utils/product-variants.options";
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
  const { eoloVariants } = productVariants;
  const { eoloOptionals } = optionalsData;
  const textForVariant =
    "La línea de turbinas de soplado eolo está compuesta por 3 grupos de turbinas: EOLO mini, EOLO junior y EOLO senior. Las principales diferencias entre estos grupos está dada por el tamaño de la carcasa y los parámetros de caudal y presión que pueden desarrollar.";

  return (
    <main>
      <ProductDetail
        title={productData.eolo.title}
        subtitle={productData.eolo.subtitle}
        description={productData.eolo.description}
        dataSheetLink={productData.eolo.dataSheetLink}
        dataForCarrousel={eolo}
      />
      <Variants
        title="Familia Eolo"
        text={textForVariant}
        dataForVariants={eoloVariants}
      />
      <OptionalsAndAccesories dataForOptionals={eoloOptionals} />
    </main>
  );
}

export default Eolo;
