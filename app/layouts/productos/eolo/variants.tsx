"use client";
import React, { useReducer } from "react";
import { ModalBody, ModalFooter, ModalHeader, Modal } from "react-bootstrap";

import { theme } from "@/app/common/styles/themes/theme";
import CenterDiv from "@/app/components/center-div";
import PageSection from "@/app/components/page-section";
import SectionTitles from "@/app/components/section-titles";
import ProductCard from "@/app/components/product-card";

import { productVariants } from "@/app/common/utils/product-variants.options";
import { ProductCardType } from "@/app/types/product-card.type";

function Variants() {
  const initialState = {
    open: false,
    selectedModal: "",
  };

  const [modal, dispatch] = useReducer((state: any, action: any): any => {
    switch (action.type) {
      case "OPEN_MODAL":
        return action.payload;
      case "CLOSE_MODAL":
        return action.payload;
      default:
        return state;
    }
  }, initialState);

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

  console.log("state?", modal);

  return (
    <>
      <PageSection>
        <CenterDiv>
          <div className="container">
            <section className="text_container">
              <SectionTitles
                text="Variantes"
                colorText={theme.primary.lightGreen}
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
          {modal.open && (
            <Modal isOpen={modal.open} toggle={closeModal}></Modal>
          )}
        </CenterDiv>
      </PageSection>
      <style jsx>{`
        button {
          width: 200px;
          height: 50px;
        }
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
