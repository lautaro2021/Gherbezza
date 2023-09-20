export type ProductType = {
  title: string;
  images: string[];
};

export type ProductCardType = {
  title: string;
  description: string;
  openModal: (product: ProductType) => void;
  images: string[];
};
