import { HistoryCarouselType } from "@/app/types/history-carousel.type";

export type ProductDetailType = {
  title: string;
  subtitle: string;
  description: string;
  dataSheetLink: string;
  dataForCarrousel: HistoryCarouselType[];
};
