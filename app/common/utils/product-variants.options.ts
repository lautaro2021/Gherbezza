import { ProductCardType } from "@/app/types/product-card.type";

type ProductVariantsType = {
  eoloVariants: ProductCardType[];
  vacuoVariants: ProductCardType[];
  airdrillVariants: ProductCardType[];
};

export const productVariants: ProductVariantsType = {
  eoloVariants: [
    {
      title: "EOLO mini",
      description:
        "Las turbinas Eolo Mini desarrollan una presión máxima de 45 mbar con caudales que van de 0,4 m3/s.",
      images: [
        "https://res.cloudinary.com/dn72zz8r5/image/upload/v1696614731/GHERBEZZA/PRODUCTOS/eolomini1_yzjozr.webp",
        "https://res.cloudinary.com/dn72zz8r5/image/upload/v1696614731/GHERBEZZA/PRODUCTOS/eolomini2_ofkmkh.webp",
      ],
      productInfo:
        "Las turbinas Eolo Junior desarrollan una presión máxima de entre 80 y 90 mbar con caudales que van desde 0,2 hasta 1,1 m3/s.",
      table:
        "https://res.cloudinary.com/dn72zz8r5/image/upload/v1696614731/GHERBEZZA/PRODUCTOS/table_l2dwmz.webp",
    },
    {
      title: "EOLO Junior",
      description:
        "Las turbinas Eolo Junior desarrollan una presión máxima de entre 80 y 90 mbar con caudales que van desde 0,2 hasta 1,1 m3/s.",
      images: [
        "https://res.cloudinary.com/dn72zz8r5/image/upload/v1698076204/GHERBEZZA/PRODUCTOS/Gherbezza_5_uu0afh.webp",
        "https://res.cloudinary.com/dn72zz8r5/image/upload/v1698076204/GHERBEZZA/PRODUCTOS/Gherbezza_5_uu0afh.webp",
      ],
      productInfo:
        "Las turbinas Eolo Junior desarrollan una presión máxima de entre 80 y 90 mbar con caudales que van desde 0,2 hasta 1,1 m3/s.",
      table:
        "https://res.cloudinary.com/dn72zz8r5/image/upload/v1696614724/GHERBEZZA/PRODUCTOS/table_m9yld1.webp",
    },
    {
      title: "EOLO Senior",
      description:
        "Las turbinas Eolo Senior desarrollan una presión máxima de 140 mbar aproximadamente y caudales desde 0,5 hasta 2,7 m3/s.",
      images: [
        "https://res.cloudinary.com/dn72zz8r5/image/upload/v1698076111/GHERBEZZA/PRODUCTOS/94531.5_dvbzmk.webp",
        "https://res.cloudinary.com/dn72zz8r5/image/upload/v1698076256/GHERBEZZA/PRODUCTOS/94531.4_1_kbemgp.webp",
      ],
      productInfo:
        "Las turbinas Eolo Junior desarrollan una presión máxima de entre 80 y 90 mbar con caudales que van desde 0,2 hasta 1,1 m3/s.",
      table:
        "https://res.cloudinary.com/dn72zz8r5/image/upload/v1696614738/GHERBEZZA/PRODUCTOS/table_lz4khh.webp",
    },
  ],
  vacuoVariants: [
    {
      title: "Sección Mini",
      description: "Para sembradoras monograno de pequeño porte.",
      images: [
        "https://res.cloudinary.com/dn72zz8r5/image/upload/v1698078226/GHERBEZZA/PRODUCTOS/VACUO/Eolo_Mini_3era_Generacion-9_vz5jhr.webp",
        "https://res.cloudinary.com/dn72zz8r5/image/upload/v1698078228/GHERBEZZA/PRODUCTOS/VACUO/Eolo_Mini_3era_Generacion-19_ovygca.webp",
      ],
      productInfo:
        "Para sembradoras monograno de pequeño porte, de hortalizas, experimentales y macheras, hasta 4 lineas de siembra. Carcasa de polietileno reticulado de alta resistencia. Accionamiento hidráulico.",
      table:
        "https://res.cloudinary.com/dn72zz8r5/image/upload/v1696614731/GHERBEZZA/PRODUCTOS/table_l2dwmz.webp",
    },
    {
      title: "Hidráulica Estándar",
      description: "Turbinas accionadas con motores hidráulicos a engranajes.",
      images: [
        "https://res.cloudinary.com/dn72zz8r5/image/upload/v1698078367/GHERBEZZA/PRODUCTOS/VACUO/82584-4.8_fm9wjr.webp",
        "https://res.cloudinary.com/dn72zz8r5/image/upload/v1698078369/GHERBEZZA/PRODUCTOS/VACUO/82584-5.9_f5zslv.webp",
      ],
      productInfo:
        "Turbinas accionadas con motores hidráulicos a engranajes, conectados de forma directa al eje del rodete (rotor). Equipos simples, seguros y con bajo costo de mantenimiento.",
      table:
        "https://res.cloudinary.com/dn72zz8r5/image/upload/v1696614724/GHERBEZZA/PRODUCTOS/table_m9yld1.webp",
    },
    {
      title: "TDF Estándar",
      description:
        "Turbinas para ser accionadas mediante la toma de fuerza del tractor.",
      images: [
        "https://res.cloudinary.com/dn72zz8r5/image/upload/v1698078075/GHERBEZZA/PRODUCTOS/VACUO/81072.2_cikphp.webp",
        "https://res.cloudinary.com/dn72zz8r5/image/upload/v1698078075/GHERBEZZA/PRODUCTOS/VACUO/81072.8_pwigyn.webp",
      ],
      productInfo:
        "Turbinas para ser accionadas mediante la toma de fuerza del tractor, contando con una multiplicación por correa y poleas.",
      table:
        "https://res.cloudinary.com/dn72zz8r5/image/upload/v1696614738/GHERBEZZA/PRODUCTOS/table_lz4khh.webp",
    },
    {
      title: "Superior",
      description: "Para cultivos con grandes requerimientos neumáticos.",
      images: [
        "https://res.cloudinary.com/dn72zz8r5/image/upload/v1698078300/GHERBEZZA/PRODUCTOS/VACUO/A611M9_CMK001.3_nxvpty.webp",
        "https://res.cloudinary.com/dn72zz8r5/image/upload/v1698078302/GHERBEZZA/PRODUCTOS/VACUO/A611M9_CMK001.2_fvxsdh.webp",
      ],
      productInfo:
        "Para cultivos con grandes requerimientos neumáticos, como garbanzo, maní o ajo. Disponibles para accionamiento hidráulico o con toma de fuerza.",
      table:
        "https://res.cloudinary.com/dn72zz8r5/image/upload/v1696614738/GHERBEZZA/PRODUCTOS/table_lz4khh.webp",
    },
  ],
  airdrillVariants: [
    {
      title: "EOLO mini",
      description:
        "Las turbinas Eolo Junior desarrollan una presión máxima de entre 80 y 90 mbar con caudales que van desde 0,2 hasta 1,1 m3/s.",
      images: [
        "https://res.cloudinary.com/dn72zz8r5/image/upload/v1696614731/GHERBEZZA/PRODUCTOS/eolomini1_yzjozr.webp",
        "https://res.cloudinary.com/dn72zz8r5/image/upload/v1696614731/GHERBEZZA/PRODUCTOS/eolomini2_ofkmkh.webp",
      ],
      productInfo:
        "Las turbinas Eolo Junior desarrollan una presión máxima de entre 80 y 90 mbar con caudales que van desde 0,2 hasta 1,1 m3/s.",
      table:
        "https://res.cloudinary.com/dn72zz8r5/image/upload/v1696614731/GHERBEZZA/PRODUCTOS/table_l2dwmz.webp",
    },
    {
      title: "EOLO Junior",
      description:
        "Las turbinas Eolo Junior desarrollan una presión máxima de entre 80 y 90 mbar con caudales que van desde 0,2 hasta 1,1 m3/s.",
      images: [
        "https://res.cloudinary.com/dn72zz8r5/image/upload/v1696614725/GHERBEZZA/PRODUCTOS/eolojunior1_skt7dh.webp",
        "https://res.cloudinary.com/dn72zz8r5/image/upload/v1696614725/GHERBEZZA/PRODUCTOS/eolojunior2_vxmson.webp",
      ],
      productInfo:
        "Las turbinas Eolo Junior desarrollan una presión máxima de entre 80 y 90 mbar con caudales que van desde 0,2 hasta 1,1 m3/s.",
      table:
        "https://res.cloudinary.com/dn72zz8r5/image/upload/v1696614724/GHERBEZZA/PRODUCTOS/table_m9yld1.webp",
    },
    {
      title: "EOLO Senior",
      description:
        "Las turbinas Eolo Senior desarrollan una presión máxima de 140 mbar aproximadamente y caudales desde 0,5 hasta 2,7 m3/s.",
      images: [
        "https://res.cloudinary.com/dn72zz8r5/image/upload/v1696614739/GHERBEZZA/PRODUCTOS/eolosenior1_zwoocy.webp",
        "https://res.cloudinary.com/dn72zz8r5/image/upload/v1696614739/GHERBEZZA/PRODUCTOS/eolosenior2_i6nx7w.webp",
      ],
      productInfo:
        "Las turbinas Eolo Junior desarrollan una presión máxima de entre 80 y 90 mbar con caudales que van desde 0,2 hasta 1,1 m3/s.",
      table:
        "https://res.cloudinary.com/dn72zz8r5/image/upload/v1696614738/GHERBEZZA/PRODUCTOS/table_lz4khh.webp",
    },
  ],
};
