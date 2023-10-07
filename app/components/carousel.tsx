import useEmblaCarousel from "embla-carousel-react";

import { HistoryCarouselType } from "@/app/types/history-carousel.type";
import { theme } from "@/app/common/styles/themes/theme";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Carousel(props: any) {
  const { options, data } = props;
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {data.map((obj: HistoryCarouselType, index: number) => (
              <div className="embla__slide" key={index}>
                <img
                  className="embla__slide__img"
                  alt={`Nuestro Recorrido - Carrusel${index}`}
                  title={`Nuestro Recorrido - Imagen ${index}`}
                  loading="lazy"
                />
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
          background-color: ${theme.secondary.greyBackground};
        }
        strong {
          margin-top: 15px;
        }
        span {
          color: ${theme.secondary.lightGrey};
        }
        @media screen and (max-width: 1000px) {
          .embla__slide__img {
            min-height: 50vw;
            aspect-ratio: 1/1.5;
          }
          .embla__slide {
            flex: 0 0 75%;
          }
        }
        @media screen and (max-width: 760px) {
          .embla__slide__img {
            min-height: 300px;
          }
          .embla__slide {
            padding-left: 20px;
          }
          strong,
          span {
            font-size: 14px;
          }
        }
      `}</style>
    </>
  );
}

export default Carousel;
