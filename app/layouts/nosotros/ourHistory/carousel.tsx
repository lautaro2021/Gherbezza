import React from "react";
import useEmblaCarousel from "embla-carousel-react";

import { carouselInfo } from "@/app/common/utils/history-carousel";
import { HistoryCarouselType } from "@/app/types/history-carousel.type";
import { theme } from "@/app/common/styles/themes/theme";

function Carousel(props: any) {
  const { options } = props;
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {carouselInfo.map((obj: HistoryCarouselType, index: any) => (
              <div className="embla__slide" key={index}>
                <img className="embla__slide__img" />
                <strong>{obj.textTitle}</strong>
                <span>{obj.textDescription}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .embla {
          --slide-spacing: 3rem;
          --slide-size: 50%;
          padding: 1.6rem;
          width: 100%;
          height: 100%;
          cursor: pointer;
        }
        .embla__viewport {
          overflow: hidden;
        }
        .embla__container {
          backface-visibility: hidden;
          display: flex;
          touch-action: pan-y;
        }
        .embla__slide {
          flex: 0 0 var(--slide-size);
          min-width: 0;
          max-width: 400px;
          padding-left: var(--slide-spacing);
          position: relative;
          display: flex;
          flex-direction: column;
        }
        .embla__slide__img {
          display: block;
          min-height: 500px;
          width: 100%;
          max-width: 500px;
          object-fit: cover;
        }
        strong {
          margin-top: 15px;
        }
        span {
          color: ${theme.secondary.lightGrey};
        }
      `}</style>
    </>
  );
}

export default Carousel;
