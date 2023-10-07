import React from "react";
import Head from "next/head";

import ProductDetail from "@/app/components/product/product-detail";
import Variants from "@/app/components/product/variants";
import OptionalsAndAccesories from "@/app/components/product/optionals-accesories";

import { optionalsData } from "@/app/common/utils/products/eolo/optionals/optionals-data";
import { productVariants } from "@/app/common/utils/product-variants.options";
import { productsCarouselData } from "@/app/common/utils/products/carousel-info";
import { productData } from "@/app/common/utils/products/product-description/data";

function Eolo() {
  const { eolo } = productsCarouselData;
  const { eoloVariants } = productVariants;
  const { eoloOptionals } = optionalsData;
  const textForVariant =
    "La línea de turbinas de soplado eolo está compuesta por 3 grupos de turbinas: EOLO mini, EOLO junior y EOLO senior. Las principales diferencias entre estos grupos está dada por el tamaño de la carcasa y los parámetros de caudal y presión que pueden desarrollar.";

  return (
    <>
      <Head>
        <meta
          property="og:title"
          content="Gherbezza - Línea EOLO de Turbinas de Soplado"
        />
        <meta
          property="og:description"
          content="Explora la línea EOLO de turbinas de soplado de Gherbezza, diseñada para mejorar la siembra y la eficiencia en el campo. ¡Optimiza tus cultivos con nuestra tecnología líder en soplado!"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta
          property="og:url"
          content="https://gherbezza.vercel.app/productos/eolo"
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/ogimage.png" />
      </Head>
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
    </>
  );
}

export default Eolo;
