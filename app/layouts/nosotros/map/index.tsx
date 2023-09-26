"use client";
import L from "leaflet";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import MarkerIcon from "@/node_modules/leaflet/dist/images/marker-icon.png";
import MarkerShadow from "@/node_modules/leaflet/dist/images/marker-shadow.png";

import "leaflet/dist/leaflet.css";

import CenterDiv from "@/app/components/center-div";
import PageSection from "@/app/components/page-section";
import { theme } from "@/app/common/styles/themes/theme";
import { footerSocial } from "@/app/common/utils/footer-options";
import OptionsFooterInterface from "@/app/types/footer-options.type";

function Map() {
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
              <span>+ 54 9 341 388 08 95</span>
              <br />
              <h4>Mail</h4>
              <span>info@gherbezza.com</span>
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
            <MapContainer
              center={[-32.98992591053522, -60.71321197004614]}
              zoom={12}
              scrollWheelZoom={true}
              style={{ height: "500px", width: "70%" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker
                icon={
                  new L.Icon({
                    iconUrl: MarkerIcon.src,
                    iconRetinaUrl: MarkerIcon.src,
                    iconSize: [25, 41],
                    iconAnchor: [12.5, 41],
                    popupAnchor: [0, -41],
                    shadowUrl: MarkerShadow.src,
                    shadowSize: [41, 41],
                  })
                }
                position={[-32.98992591053522, -60.71321197004614]}
              ></Marker>
            </MapContainer>
          </div>
        </CenterDiv>
      </PageSection>
      <style jsx>{`
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
      `}</style>
    </>
  );
}

export default Map;
