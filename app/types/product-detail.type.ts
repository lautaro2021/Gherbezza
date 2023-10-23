import { HistoryCarouselType } from "@/app/types/history-carousel.type";

type DataSheetLink = {
  fichaTecnica: string;
  manual: string;
  medidas: string;
};

export type ProductDetailType = {
  title: string;
  subtitle: string;
  description: string;
  dataSheetLink: DataSheetLink;
  dataForCarrousel: HistoryCarouselType[];
};
