import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import PageSection from "@/app/components/page-section";
import CenterDiv from "@/app/components/center-div";
import SectionTitles from "@/app/components/section-titles";

import { carouselOptions } from "@/app/common/utils/carousel-options";
import { ImageCarouselType } from "@/app/types/carousel.type";

Autoplay.globalOptions = { delay: 4000 };

function OurClients() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <>
      <PageSection height="auto">
        <CenterDiv>
          <div className="container">
            <SectionTitles
              text="Clientes que confían en nosotros"
              centeredText={true}
            />
            <div className="embla" ref={emblaRef}>
              <div className="embla__container">
                <div className="embla__slide">
                  {carouselOptions.slide1?.map(
                    (obj: ImageCarouselType, index: number) => (
                      <img src={obj.src} alt={obj.alt} title={obj.title} />
                    )
                  )}
                </div>
                <div className="embla__slide">
                  {carouselOptions.slide2?.map(
                    (obj: ImageCarouselType, index: number) => (
                      <img src={obj.src} alt={obj.alt} title={obj.title} />
                    )
                  )}
                </div>
                <div className="embla__slide">
                  {carouselOptions.slide3?.map(
                    (obj: ImageCarouselType, index: number) => (
                      <img src={obj.src} alt={obj.alt} title={obj.title} />
                    )
                  )}
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </CenterDiv>
      </PageSection>
      <style jsx>{`
        .container {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .embla {
          overflow: hidden;
          width: 100%;
          height: 100%;
          height: 300px;
        }
        .embla__container {
          display: flex;
          align-items: center;
          width: 100%;
          height: 100%;
        }
        .embla__slide {
          flex: 0 0 100%;
          min-width: 0;
          display: flex;
          align-items: center;
          justify-content: space-evenly;
        }
      `}</style>
    </>
  );
}

export default OurClients;