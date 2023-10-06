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
        "https://res.cloudinary.com/dn72zz8r5/image/upload/v1696614713/GHERBEZZA/PRODUCTOS/preview_e1xlt8.webp",
    },
    {
      optionalDescription: "Brida para conectar salida a cañeria o tolva",
      imageUrl:
        "https://res.cloudinary.com/dn72zz8r5/image/upload/v1696614713/GHERBEZZA/PRODUCTOS/preview_e1xlt8.webp",
    },
    {
      optionalDescription: "Sin motor para accionamientos especiales",
      imageUrl:
        "https://res.cloudinary.com/dn72zz8r5/image/upload/v1696614713/GHERBEZZA/PRODUCTOS/preview_e1xlt8.webp",
    },
  ],
  vacuoOptionals: [
    {
      optionalDescription: "Bocas intercambiables",
      imageUrl:
        "https://res.cloudinary.com/dn72zz8r5/image/upload/v1696614713/GHERBEZZA/PRODUCTOS/preview_e1xlt8.webp",
    },
    {
      optionalDescription: "Soporte para alternador",
      imageUrl:
        "https://res.cloudinary.com/dn72zz8r5/image/upload/v1696614713/GHERBEZZA/PRODUCTOS/preview_e1xlt8.webp",
    },
    {
      optionalDescription: "Variedad de Accionamiento",
      imageUrl:
        "https://res.cloudinary.com/dn72zz8r5/image/upload/v1696614713/GHERBEZZA/PRODUCTOS/preview_e1xlt8.webp",
    },
  ],
  airdrillOptionals: [
    {
      optionalDescription: "Colocacion de Rolos",
      imageUrl:
        "https://res.cloudinary.com/dn72zz8r5/image/upload/v1696614713/GHERBEZZA/PRODUCTOS/preview_e1xlt8.webp",
    },
    {
      optionalDescription: "Torres de distribución",
      imageUrl:
        "https://res.cloudinary.com/dn72zz8r5/image/upload/v1696614713/GHERBEZZA/PRODUCTOS/preview_e1xlt8.webp",
    },
  ],
};
