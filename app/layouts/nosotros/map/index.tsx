"use client";
import CenterDiv from "@/app/components/center-div";
import PageSection from "@/app/components/page-section";
import { theme } from "@/app/common/styles/themes/theme";
import { footerSocial } from "@/app/common/utils/footer-options";
import OptionsFooterInterface from "@/app/types/footer-options.type";

import Map from "./map";

function MapDirection() {
  return (
    <>
      <PageSection height maxHeight>
        <CenterDiv>
          <div className="container">
            <div className="info_container">
              <h3>Encontranos</h3>
              <br />
              <h4>Dirección</h4>
              <span>Calle 1910 N° 4533F, S2010FQA</span>
              <span>Rosario, Santa Fe</span>
              <br />
              <h4>Contacto</h4>
              <span>+ 54 9 341 572398</span>
              <br />
              <h4>Mail</h4>
              <span>ventas@gherbezza.com</span>
              <br />
              <div>
                {footerSocial.map((option: OptionsFooterInterface) => (
                  <a
                    key={option.description}
                    href={option.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={option.image}
                      alt={option.description}
                      title={option.title}
                    />
                  </a>
                ))}
              </div>
            </div>
            <Map />
          </div>
        </CenterDiv>
      </PageSection>
      <style jsx>{`
        .leaflet-bar {
          z-index: 0;
          border: 2px solid red !important;
        }
        .container {
          width: 100%;
          height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .info_container {
          display: flex;
          flex-direction: column;
          width: 30%;
          height: 100%;
          background-color: ${theme.secondary.greyBackground};
          padding: 40px;
        }
        .info_container div {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 15px;
        }
        img {
          width: 40px;
          transition: all 0.2s ease;
        }
        img:hover {
          filter: brightness(2);
        }
        h3 {
          font-size: 50px;
          color: ${theme.primary.lightGreen};
        }
        h4 {
          font-size: 24px;
          font-weight: 600;
        }
        span {
          font-size: 20px;
          color: ${theme.secondary.lightGrey};
        }
        br {
          display: block;
          content: "";
          margin: 15px 0px;
        }
        @media screen and (max-width: 1920px) {
          h4 {
            font-size: var(--d-text-fontsize);
          }
          h3 {
            font-size: clamp(40px, 2.604vw, 50px);
          }
          span {
            font-size: clamp(18px, 1.042vw, 20px);
          }
          img {
            width: clamp(32px, 2.083vw, 40px);
          }
        }
        @media screen and (max-width: 1000px) {
          .container {
            flex-direction: column-reverse;
            height: auto;
          }
          .info_container {
            width: 100%;
          }
        }
        @media screen and (max-width: 760px) {
          .info_container {
            padding: 20px;
          }
          h3 {
            font-size: clamp(30px, 5.263vw, 40px);
          }
          h4 {
            font-size: 18px;
          }
          span {
            font-size: 16px;
          }
        }
      `}</style>
    </>
  );
}

export default MapDirection;
