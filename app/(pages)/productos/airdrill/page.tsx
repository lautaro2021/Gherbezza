import ProductDetail from "@/app/components/product/product-detail";
import { productData } from "@/app/common/utils/products/product-description/data";
import { Metadata } from "next";

import { productsCarouselData } from "@/app/common/utils/products/carousel-info";
import Variants from "@/app/components/product/variants";
import OptionalsAndAccesories from "@/app/components/product/optionals-accesories";
import { optionalsData } from "@/app/common/utils/products/eolo/optionals/optionals-data";
import { productVariants } from "@/app/common/utils/product-variants.options";

export const metadata: Metadata = {
  title:
    "Nuestros productos - Airdrill | Gherbezza - Turbinas neumáticas para sembradoras",
  description:
    "Bienvenido a la fábrica de turbinas neumáticas para sembradoras en Rosario, Santa Fe. Descubre nuestras avanzadas turbinas neumáticas para agricultura de precisión. Nuestros productos de alta calidad mejoran la eficiencia en la siembra, impulsando la productividad agrícola. Explora nuestras soluciones líderes en la industria y haz que tus sembradoras sean más precisas y rentables.",
};

function Airdrill() {
  const { airdrill } = productsCarouselData;
  const { airdrillVariants } = productVariants;
  const { airdrillOptionals } = optionalsData;
  return (
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
  );
}

export default Airdrill;
