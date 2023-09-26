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
      imageUrl: "/images/layouts/productos/eolo/optionals/preview.webp",
    },
    {
      optionalDescription: "Brida para conectar salida a cañeria o tolva",
      imageUrl: "/images/layouts/productos/eolo/optionals/preview.webp",
    },
    {
      optionalDescription: "Sin motor para accionamientos especiales",
      imageUrl: "/images/layouts/productos/eolo/optionals/preview.webp",
    },
  ],
  vacuoOptionals: [
    {
      optionalDescription: "Bocas intercambiables",
      imageUrl: "/images/layouts/productos/eolo/optionals/preview.webp",
    },
    {
      optionalDescription: "Soporte para alternador",
      imageUrl: "/images/layouts/productos/eolo/optionals/preview.webp",
    },
    {
      optionalDescription: "Variedad de Accionamiento",
      imageUrl: "/images/layouts/productos/eolo/optionals/preview.webp",
    },
  ],
  airdrillOptionals: [
    {
      optionalDescription: "Colocacion de Rolos",
      imageUrl: "/images/layouts/productos/eolo/optionals/preview.webp",
    },
    {
      optionalDescription: "Torres de distribución",
      imageUrl: "/images/layouts/productos/eolo/optionals/preview.webp",
    },
  ],
};
