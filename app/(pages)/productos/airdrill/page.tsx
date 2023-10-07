import Head from "next/head";

import ProductDetail from "@/app/components/product/product-detail";
import { productData } from "@/app/common/utils/products/product-description/data";

import { productsCarouselData } from "@/app/common/utils/products/carousel-info";
import Variants from "@/app/components/product/variants";
import OptionalsAndAccesories from "@/app/components/product/optionals-accesories";
import { optionalsData } from "@/app/common/utils/products/eolo/optionals/optionals-data";
import { productVariants } from "@/app/common/utils/product-variants.options";

function Airdrill() {
  const { airdrill } = productsCarouselData;
  const { airdrillVariants } = productVariants;
  const { airdrillOptionals } = optionalsData;
  return (
    <>
      <Head>
        <meta
          property="og:title"
          content="Gherbezza - Línea AIRDRILL de Dosificadores de Siembra"
        />
        <meta
          property="og:description"
          content="Descubre la línea AIRDRILL de dosificadores de siembra de Gherbezza, diseñada para una siembra precisa y eficiente en el campo. ¡Optimiza tus cultivos con nuestra tecnología de vanguardia en dosificación!"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta
          property="og:url"
          content="https://gherbezza.vercel.app/productos/airdrill"
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/ogimage.png" />
      </Head>
      <main>
        <ProductDetail
          title={productData.airdrill.title}
          subtitle={productData.airdrill.subtitle}
          description={productData.airdrill.description}
          dataSheetLink={productData.airdrill.dataSheetLink}
          dataForCarrousel={airdrill}
        />
        <Variants
          title="Familia AirDrill"
          text=""
          dataForVariants={airdrillVariants}
        />
        <OptionalsAndAccesories dataForOptionals={airdrillOptionals} />
      </main>
    </>
  );
}

export default Airdrill;
