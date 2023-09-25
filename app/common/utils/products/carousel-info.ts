import { HistoryCarouselType } from "@/app/types/history-carousel.type";

type ProductsCarouselType = {
  eolo: HistoryCarouselType[];
  airdrill: HistoryCarouselType[];
  vacuo: HistoryCarouselType[];
};

export const productsCarouselData: ProductsCarouselType = {
  eolo: [
    {
      image: "/images/layouts/productos/eolo/eolo.png",
      alt: "Linea Eolo - imagen 1",
      title: "Eolo, imagen 1 - Gherbezza",
    },
    {
      image: "/images/layouts/productos/eolo/eolo.png",
      alt: "Linea Eolo - imagen 2",
      title: "Eolo, imagen 2 - Gherbezza",
    },
    {
      image: "/images/layouts/productos/eolo/eolo.png",
      alt: "Linea Eolo - imagen 3",
      title: "Eolo, imagen 3 - Gherbezza",
    },
  ],
  airdrill: [
    {
      image: "",
      alt: "",
      title: "",
    },
    {
      image: "",
      alt: "",
      title: "",
    },
    {
      image: "",
      alt: "",
      title: "",
    },
  ],
  vacuo: [
    {
      image: "",
      alt: "",
      title: "",
    },
    {
      image: "",
      alt: "",
      title: "",
    },
    {
      image: "",
      alt: "",
      title: "",
    },
  ],
};
