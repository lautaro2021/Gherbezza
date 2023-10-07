import React from "react";
import Head from "next/head";

import ProductDetail from "@/app/components/product/product-detail";
import Variants from "@/app/components/product/variants";
import OptionalsAndAccesories from "@/app/components/product/optionals-accesories";

import { productData } from "@/app/common/utils/products/product-description/data";
import { productsCarouselData } from "@/app/common/utils/products/carousel-info";
import { optionalsData } from "@/app/common/utils/products/eolo/optionals/optionals-data";
import { productVariants } from "@/app/common/utils/product-variants.options";

function Vacuo() {
  const { vacuo } = productsCarouselData;
  const { vacuoVariants } = productVariants;
  const { vacuoOptionals } = optionalsData;
  const textForVariant =
    "La línea de turbinas de soplado Vacuo se ha diversificado en cuatro grupos distintos: la Sección Mini, la Hidráulica Estándar, la TDF Estándar y la Superior. Cada uno de estos grupos presenta notables diferencias en cuanto al diseño de la carcasa y los parámetros de caudal y presión que son capaces de generar.";

  return (
    <>
      <Head>
        <meta
          property="og:title"
          content="Gherbezza - Línea VACUO de Turbinas de Aspiración"
        />
        <meta
          property="og:description"
          content="Conoce la línea VACUO de turbinas de aspiración de Gherbezza, diseñada para optimizar la siembra y el rendimiento en el campo. ¡Mejora tus cultivos con nuestra tecnología de calidad superior en aspiración!"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta
          property="og:url"
          content="https://gherbezza.vercel.app/productos/vacuo"
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/ogimage.png" />
      </Head>
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
    </>
  );
}

export default Vacuo;
