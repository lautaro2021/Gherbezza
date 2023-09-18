"use client";
import React, { useReducer } from "react";
import { theme } from "@/app/common/styles/themes/theme";
import CenterDiv from "@/app/components/center-div";
import PageSection from "@/app/components/page-section";
import SectionTitles from "@/app/components/titles/section-titles";
import ProductCard from "@/app/components/product/product-card";

import { productVariants } from "@/app/common/utils/product-variants.options";
import { ProductCardType } from "@/app/types/product-card.type";
import Modal from "@/app/components/modal";

type ModalStateType = {
  open: boolean;
  selectedModal: string;
};

type ActionType = {
  type: string;
  payload: ModalStateType;
};

function Variants() {
  const initialState: ModalStateType = {
    open: false,
    selectedModal: "",
  };

  const [modal, dispatch] = useReducer(
    (state: ModalStateType, action: ActionType): ModalStateType => {
      switch (action.type) {
        case "OPEN_MODAL":
          return action.payload;
        case "CLOSE_MODAL":
          return action.payload;
        default:
          return state;
      }
    },
    initialState
  );

  const openModal = (modal: string) => {
    dispatch({
      type: "OPEN_MODAL",
      payload: {
        open: true,
        selectedModal: modal,
      },
    });
  };

  const closeModal = () => {
    dispatch({
      type: "CLOSE_MODAL",
      payload: {
        open: false,
        selectedModal: "",
      },
    });
  };

  return (
    <>
      <PageSection>
        <CenterDiv>
          <div className="container">
            <section className="text_container">
              <SectionTitles
                text="Variantes"
                colorText={theme.primary.lightGreen}
                fontSize="60px"
              />
              <br />
              <p>
                La línea de turbinas de soplado eolo está compuesta por 2 grupos
                de turbinas: EOLO junior y EOLO senior. Las principales
                diferencias entre estos grupos está dada por el tamaño de la
                carcasa y los parámetros de caudal y presión que pueden
                desarrollar
              </p>
            </section>
            <div className="products_card_container">
              {productVariants.map(
                (variant: ProductCardType, index: number) => (
                  <ProductCard
                    title={variant.title}
                    description={variant.description}
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
        modalHeader={modal.selectedModal}
      />
      <style jsx>{`
        .container {
          width: 100%;
          height: 100%;
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
          justify-content: space-between;
        }
      `}</style>
    </>
  );
}

export default Variants;
