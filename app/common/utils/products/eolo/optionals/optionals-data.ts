export type ProductOptionalsType = {
  optionalDescription: string;
  imageUrl: string;
};

type OptionalsDataType = {
  eoloOptionals: ProductOptionalsType[];
  vacuoOptionals: ProductOptionalsType[];
  airdrillOptionals: ProductOptionalsType[];
};

export const optionalsData: OptionalsDataType = {
  eoloOptionals: [
    {
      optionalDescription: "Soporte para radiador de aceite",
      imageUrl:
        "https://res.cloudinary.com/dn72zz8r5/image/upload/v1696947638/GHERBEZZA/INICIO/ORIGINAL_Logo_VERTICAL_Simplificado_Color_Pantone_GHERBEZZA_May_2018_xxbuww.webp",
    },
    {
      optionalDescription: "Brida para conectar salida a cañeria o tolva",
      imageUrl:
        "https://res.cloudinary.com/dn72zz8r5/image/upload/v1696947638/GHERBEZZA/INICIO/ORIGINAL_Logo_VERTICAL_Simplificado_Color_Pantone_GHERBEZZA_May_2018_xxbuww.webp",
    },
    {
      optionalDescription: "Sin motor para accionamientos especiales",
      imageUrl:
        "https://res.cloudinary.com/dn72zz8r5/image/upload/v1696947638/GHERBEZZA/INICIO/ORIGINAL_Logo_VERTICAL_Simplificado_Color_Pantone_GHERBEZZA_May_2018_xxbuww.webp",
    },
  ],
  vacuoOptionals: [
    {
      optionalDescription: "Bocas intercambiables",
      imageUrl:
        "https://res.cloudinary.com/dn72zz8r5/image/upload/v1696947638/GHERBEZZA/INICIO/ORIGINAL_Logo_VERTICAL_Simplificado_Color_Pantone_GHERBEZZA_May_2018_xxbuww.webp",
    },
    {
      optionalDescription: "Soporte para alternador",
      imageUrl:
        "https://res.cloudinary.com/dn72zz8r5/image/upload/v1696947638/GHERBEZZA/INICIO/ORIGINAL_Logo_VERTICAL_Simplificado_Color_Pantone_GHERBEZZA_May_2018_xxbuww.webp",
    },
    {
      optionalDescription: "Variedad de Accionamiento",
      imageUrl:
        "https://res.cloudinary.com/dn72zz8r5/image/upload/v1696947638/GHERBEZZA/INICIO/ORIGINAL_Logo_VERTICAL_Simplificado_Color_Pantone_GHERBEZZA_May_2018_xxbuww.webp",
    },
  ],
  airdrillOptionals: [
    {
      optionalDescription: "Colocacion de Rolos",
      imageUrl:
        "https://res.cloudinary.com/dn72zz8r5/image/upload/v1696947638/GHERBEZZA/INICIO/ORIGINAL_Logo_VERTICAL_Simplificado_Color_Pantone_GHERBEZZA_May_2018_xxbuww.webp",
    },
    {
      optionalDescription: "Torres de distribución",
      imageUrl:
        "https://res.cloudinary.com/dn72zz8r5/image/upload/v1696947638/GHERBEZZA/INICIO/ORIGINAL_Logo_VERTICAL_Simplificado_Color_Pantone_GHERBEZZA_May_2018_xxbuww.webp",
    },
  ],
};
