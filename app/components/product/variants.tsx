"use client";
import React, { useReducer } from "react";
import { theme } from "@/app/common/styles/themes/theme";
import CenterDiv from "@/app/components/center-div";
import PageSection from "@/app/components/page-section";
import SectionTitles from "@/app/components/titles/section-titles";
import ProductCard from "@/app/components/product/product-card";

import { ProductCardType, ProductType } from "@/app/types/product-card.type";
import Modal from "@/app/components/product/modal";

type ModalStateType = {
  open: boolean;
  selectedModal: ProductType;
};

type ActionType = {
  type: string;
  payload: ModalStateType;
};

type VariantType = {
  title: string;
  text: string;
  dataForVariants: ProductCardType[];
};

function Variants({ title, text, dataForVariants }: VariantType) {
  const initialState: ModalStateType = {
    open: false,
    selectedModal: { title: "", images: [] },
  };

  const [modal, dispatch] = useReducer(
    (state: ModalStateType, action: ActionType): ModalStateType => {
      switch (action.type) {
        case "OPEN_MODAL":
          document.body.style.overflow = "hidden";
          document.body.style.height = "100%";
          return action.payload;
        case "CLOSE_MODAL":
          document.body.style.overflow = "auto";
          document.body.style.height = "auto";
          return action.payload;
        default:
          return state;
      }
    },
    initialState
  );

  const openModal = (productInfo: ProductType) => {
    dispatch({
      type: "OPEN_MODAL",
      payload: {
        open: true,
        selectedModal: productInfo,
      },
    });
  };

  const closeModal = () => {
    dispatch({
      type: "CLOSE_MODAL",
      payload: {
        open: false,
        selectedModal: { title: "", images: [] },
      },
    });
  };

  return (
    <>
      <PageSection height maxHeight>
        <CenterDiv>
          <div className="container">
            <section className="text_container">
              <SectionTitles
                text={title}
                colorText={theme.primary.lightGreen}
                fontSize="60px"
              />
              <br />
              <p>{text}</p>
            </section>
            <div className="products_card_container">
              {dataForVariants.map(
                (variant: ProductCardType, index: number) => (
                  <ProductCard
                    product={variant}
                    key={index}
                    openModal={openModal}
                  />
                )
              )}
            </div>
          </div>
        </CenterDiv>
      </PageSection>
      <Modal
        isOpen={modal.open}
        onClose={closeModal}
        product={modal.selectedModal}
      />
      <style jsx>{`
        .container {
          width: 100%;
          height: 100%;
          min-height: 600px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-around;
        }
        p {
          font-weight: 200;
          font-size: 24px;
          max-width: 60%;
        }
        .products_card_container {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 20px;
        }
        @media screen and (max-width: 1920px) {
          p {
            font-size: var(--d-text-fontsize);
          }
        }
        @media screen and (max-width: 1000px) {
          .products_card_container {
            flex-wrap: wrap;
            padding: 25px 0px;
          }
          p {
            max-width: 100%;
            font-size: clamp(16px, 2vw, 20px);
          }
        }
        @media screen and (max-width: 760px) {
          p {
            font-size: clamp(14px, 2.105vw, 16px);
          }
        }
      `}</style>
    </>
  );
}

export default Variants;
