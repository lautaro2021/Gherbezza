import React from "react";
import Image from "next/image";

import { ProductOptionalsType } from "@/app/common/utils/products/eolo/optionals/optionals-data";

function ProductOptionalsCard({
  optionalDescription,
  imageUrl,
}: ProductOptionalsType) {
  return (
    <>
      <article>
        <figure>
          <Image
            src={imageUrl}
            alt="Gherbezza fabrica de turbinas neumaticas para sembradoras"
            title="Gherbezza turbinas neumaticas para sembradoras"
            fill
            style={{ objectFit: "cover" }}
            placeholder="blur"
            blurDataURL={imageUrl}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </figure>
        <div className="optional_description_container">
          <p>{optionalDescription}</p>
        </div>
      </article>
      <style jsx>{`
        article {
          width: 100%;
          max-width: 340px;
          height: 300px;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          text-align: center;
          box-shadow: 0px 5px 12px 5px rgba(0, 0, 0, 0.1);
        }
        figure {
          width: 100%;
          height: 75%;
          position: relative;
        }
        .optional_description_container {
          height: 25%;
          width: 100%;
          display: grid;
          place-items: center;
          padding: 12px;
        }
        p {
          font-size: 20px;
        }
      `}</style>
    </>
  );
}

export default ProductOptionalsCard;
