import React from "react";

import ProductDetail from "@/app/components/product/product-detail";
import Variants from "@/app/components/product/variants";
import OptionalsAndAccesories from "@/app/components/product/optionals-accesories";

import { productData } from "@/app/common/utils/products/product-description/data";
import { productsCarouselData } from "@/app/common/utils/products/carousel-info";
import { Metadata } from "next";
import { optionalsData } from "@/app/common/utils/products/eolo/optionals/optionals-data";
import { productVariants } from "@/app/common/utils/product-variants.options";

export const metadata: Metadata = {
  title:
    "Nuestros productos - Vacuo | Gherbezza - Turbinas neumáticas para sembradoras",
  description:
    "Bienvenido a la fábrica de turbinas neumáticas para sembradoras en Rosario, Santa Fe. Descubre nuestras avanzadas turbinas neumáticas para agricultura de precisión. Nuestros productos de alta calidad mejoran la eficiencia en la siembra, impulsando la productividad agrícola. Explora nuestras soluciones líderes en la industria y haz que tus sembradoras sean más precisas y rentables.",
};

function Vacuo() {
  const { vacuo } = productsCarouselData;
  const { vacuoVariants } = productVariants;
  const { vacuoOptionals } = optionalsData;
  const textForVariant =
    "La línea de turbinas de soplado Vacuo se ha diversificado en cuatro grupos distintos: la Sección Mini, la Hidráulica Estándar, la TDF Estándar y la Superior. Cada uno de estos grupos presenta notables diferencias en cuanto al diseño de la carcasa y los parámetros de caudal y presión que son capaces de generar.";

  return (
    <main>
      <ProductDetail
        title={productData.vacuo.title}
        subtitle={productData.vacuo.subtitle}
        description={productData.vacuo.description}
        dataSheetLink={productData.vacuo.dataSheetLink}
        dataForCarrousel={vacuo}
      />
      <Variants
        title="Familia Vacuo"
        dataForVariants={vacuoVariants}
        text={textForVariant}
      />
      <OptionalsAndAccesories dataForOptionals={vacuoOptionals} />
    </main>
  );
}

export default Vacuo;
