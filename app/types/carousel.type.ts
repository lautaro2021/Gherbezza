export type ImageCarouselType = {
  src: string;
  alt: string;
  title: string;
};

export type CarouselType = {
  slide1?: ImageCarouselType[];
  slide2?: ImageCarouselType[];
  slide3?: ImageCarouselType[];
};
