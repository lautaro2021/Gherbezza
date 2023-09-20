import { ProductType } from "./product-card.type";

export type ModalType = {
  isOpen?: boolean;
  onClose?: () => void;
  product: ProductType;
};
