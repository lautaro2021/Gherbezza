import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

import { HistoryCarouselType } from "@/app/types/history-carousel.type";
import { theme } from "@/app/common/styles/themes/theme";

function ProductCarousel(props: any) {
  const { options, data } = props;
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {data.map((productImage: HistoryCarouselType, index: number) => (
              <div className="embla__slide" key={index}>
                <figure className="embla__slide__img">
                  <Image
                    src={productImage.image}
                    alt={productImage.alt}
                    title={productImage.title}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .embla {
          --slide-spacing: 1rem;
          --slide-size: 100%;
          width: 100%;
          height: 100%;
          cursor: pointer;
        }
        .embla__viewport {
          overflow: hidden;
          height: 100%;
        }
        .embla__container {
          height: 100%;
          backface-visibility: hidden;
          display: flex;
          touch-action: pan-y;
        }
        .embla__slide {
          padding-left: var(--slide-spacing);
          flex: 0 0 var(--slide-size);
          min-width: 0;
          max-width: 80%;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .embla__slide__img {
          position: relative;
          height: 100%;
          display: block;
          min-height: 500px;
          width: 100%;
          object-fit: cover;
        }
        strong {
          margin-top: 15px;
        }
        span {
          color: ${theme.secondary.lightGrey};
        }
        @media screen and (max-width: 1000px) {
          .embla__slide {
            max-width: 95%;
          }
        }
        @media screen and (max-width: 760px) {
          .embla__slide {
            max-width: 50%;
          }
          .embla__slide:first-child {
            padding-left: 0;
          }
          .embla__slide__img {
            min-height: 0;
            max-height: 300px;
          }
        }
        @media screen and (max-width: 500px) {
          .embla__slide {
            max-width: 65%;
          }
          .embla__slide__img {
            min-height: 0;
            max-height: 250px;
          }
        }
      `}</style>
    </>
  );
}

export default ProductCarousel;
