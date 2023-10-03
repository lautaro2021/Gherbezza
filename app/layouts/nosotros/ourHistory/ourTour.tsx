"use client";
import { BsArrowRightCircle } from "react-icons/bs";

import { tourData } from "@/app/common/utils/history-carousel";
import Carousel from "@/app/components/carousel";
import useSliderMargin from "@/app/hooks/useSliderMargin";
import { theme } from "@/app/common/styles/themes/theme";

function OurTour() {
  const SLIDER_MARGIN = useSliderMargin(1500);
  const OPTIONS = { dragFree: true, containScroll: "trimSnaps" };

  return (
    <>
      <section>
        <h3>Nuestro recorrido</h3>
        <div className="carousel_container">
          <div className="arrow_container">
            <BsArrowRightCircle
              style={{
                fontSize: "40px",
                color: `${theme.secondary.lightGrey}`,
              }}
            />
          </div>

          <Carousel options={OPTIONS} data={tourData} />
        </div>
      </section>
      <style jsx>{`
        section {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 50px 0px;
        }
        h3 {
          width: 100%;
          max-width: 1500px;
          font-weight: bold;
          font-size: 40px;
        }
        .carousel_container {
          display: flex;
          align-items: center;
          gap: 25px;
          width: 100%;
          padding: 20px 0px;
          padding-left: ${SLIDER_MARGIN}px;
          overflow: hidden;
        }
        .arrow_container {
          width: 40px;
        }
        @media screen and (max-width: 1920px) {
          h3 {
            font-size: clamp(30px, 2.1vw, 40px);
          }
        }
        @media screen and (max-width: 1530px) {
          section {
            padding: 50px 30px;
          }
          .carousel_container {
            padding: 20px 0px !important;
          }
        }
        @media screen and (max-width: 600px) {
          h3 {
            font-size: clamp(25px, 5vw, 30px);
          }
          .arrow_container {
            display: none;
          }
        }
      `}</style>
    </>
  );
}

export default OurTour;
