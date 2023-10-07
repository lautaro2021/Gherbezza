"use client";
import Image from "next/image";
import CenterDiv from "@/app/components/center-div";
import PageSection from "@/app/components/page-section";
import Button from "@/app/components/button/button";
import SectionTitles from "@/app/components/titles/section-titles";

import { theme } from "@/app/common/styles/themes/theme";

function BePartOfUs() {
  return (
    <>
      <PageSection height maxHeight>
        <CenterDiv>
          <div className="container">
            <div className="image_container">
              <Image
                src="https://res.cloudinary.com/dn72zz8r5/image/upload/v1696613838/GHERBEZZA/INICIO/partOfUs_bp0p9x.webp"
                alt="Trabaja con nostros Gherbezza turbinas neumaticas para sembradoras"
                title="Trabaja con nostros Gherbezza turbinas neumaticas para sembradoras"
                fill
                style={{ objectFit: "cover" }}
                placeholder="blur"
                blurDataURL="https://res.cloudinary.com/dn72zz8r5/image/upload/v1696613838/GHERBEZZA/INICIO/partOfUs_bp0p9x.webp"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <img
                src="https://res.cloudinary.com/dn72zz8r5/image/upload/v1696613837/GHERBEZZA/INICIO/operario_ijj6y7.webp"
                alt="operario - trabaja con nosotros - gherbezza turbinas neumaticas para sembradoras"
                title="trabaja con nosotros"
                loading="lazy"
              />
            </div>
            <div className="text_container">
              <SectionTitles text="Forma parte del equipo" />
              <br />
              <p>
                Forma parte de nuestro equipo líder en la fabricación de
                turbinas para sembradoras. Únete a una comunidad apasionada que
                impulsa la agricultura moderna a través de la innovación.
              </p>
              <Button
                link="/nosotros#work"
                text="Unite"
                textColor={theme.secondary.black}
              />
            </div>
          </div>
        </CenterDiv>
      </PageSection>
      <style jsx>{`
        .container {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .image_container {
          width: 40%;
          height: 600px;
          position: relative;
        }
        .image_container img {
          z-index: 1000;
          position: absolute;
          bottom: -30px;
          right: -4vw;
        }
        .text_container {
          width: 40%;
          display: flex;
          flex-direction: column;
          align-items: space-between;
          justify-content: center;
        }
        .text_container p {
          font-size: 24px;
          font-weight: 200;
        }
        @media screen and (max-width: 1920px) {
          .text_container p {
            font-size: var(--d-text-fontsize);
          }
        }
        @media screen and (max-width: 1000px) {
          .image_container {
            width: 50%;
            height: 500px;
          }
          .image_container img {
            width: 30vw;
          }
        }
        @media screen and (max-width: 600px) {
          .image_container img {
            display: none;
          }
          .image_container {
            width: 100%;
            height: 66vw;
          }
          .container {
            flex-direction: column;
          }
          .text_container {
            width: 100%;
            padding: 8px 0px;
          }
          .text_container p {
            font-size: var(--s-text-fontsize);
          }
        }
      `}</style>
    </>
  );
}

export default BePartOfUs;
