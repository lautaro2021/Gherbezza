"use client";
import Button from "@/app/components/button/button";
import CenterDiv from "@/app/components/center-div";
import PageSection from "@/app/components/page-section";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { useSearchParams } from "next/navigation";

import { theme } from "@/app/common/styles/themes/theme";
import Link from "next/link";

function OurServices() {
  const searchParams = useSearchParams();
  const actualService = searchParams.get("service") || "postventa";

  const leftArrowStyle = {
    color: `${
      actualService === "postventa"
        ? theme.primary.lightGreen
        : theme.primary.darkGreen
    }`,
    cursor: "pointer",
  };
  const rightArrowStyle = {
    color: `${
      actualService !== "postventa"
        ? theme.primary.lightGreen
        : theme.primary.darkGreen
    }`,
    cursor: "pointer",
  };

  return (
    <>
      <PageSection
        backgroundColor={theme.secondary.greyBackground}
        height
        maxHeight
      >
        <CenterDiv>
          <div className="container">
            <div className="title_container">
              <div></div>
              <h2>Servicios clave</h2>
            </div>
            {actualService === "postventa" ? (
              <div className="service">
                <div className="image_container">
                  <img
                    src="https://res.cloudinary.com/dn72zz8r5/image/upload/v1696616109/GHERBEZZA/SERVICIOS/postventa_as44e1.webp"
                    alt="Servicio de postventa - Gherbezza, turbinas neumaticas para sembradoras"
                    title="Servicio de Postventa - Gherbezza"
                    loading="lazy"
                  />
                  <div>
                    <Link href={`?service=postventa`} scroll={false}>
                      <BsArrowLeft style={leftArrowStyle} />
                    </Link>
                    <Link href={`?service=asesoramiento`} scroll={false}>
                      <BsArrowRight style={rightArrowStyle} />
                    </Link>
                  </div>
                </div>
                <div className="service_info_container">
                  <h3>Postventa</h3>
                  <p>
                    Ofrecemos un servicio postventa de calidad y eficiente para
                    garantizar la plena satisfacción con nuestras turbinas
                    neumáticas para sembradoras.
                  </p>
                  <br />
                  <br />
                  <Button
                    bordered={true}
                    text="Ver más"
                    textColor={theme.secondary.white}
                    link="/servicios"
                  />
                </div>
              </div>
            ) : (
              <div className="service">
                <div className="image_container">
                  <img
                    src="https://res.cloudinary.com/dn72zz8r5/image/upload/v1696616110/GHERBEZZA/SERVICIOS/asesoramiento-tecnico_ftjq9z.webp"
                    alt="Servicio de Asesoramiento Tecnico - Gherbezza, turbinas neumaticas para sembradoras"
                    title="Servicio de Asesoramiento Tecnico - Gherbezza"
                    loading="lazy"
                  />
                  <div>
                    <Link href={`?service=postventa`} scroll={false}>
                      <BsArrowLeft style={leftArrowStyle} />
                    </Link>
                    <Link href={`?service=asesoramiento`} scroll={false}>
                      <BsArrowRight style={rightArrowStyle} />
                    </Link>
                  </div>
                </div>
                <div className="service_info_container">
                  <h3>Asesoramiento Técnico</h3>
                  <p>
                    Brindamos asesoramiento técnico de calidad y altamente
                    eficiente para garantizar que obtenga el máximo rendimiento
                    de nuestras turbinas neumáticas para sembradoras.
                  </p>
                  <br />
                  <br />
                  <Button
                    bordered={true}
                    text="Ver más"
                    textColor={theme.secondary.white}
                    link="/servicios"
                  />
                </div>
              </div>
            )}
          </div>
        </CenterDiv>
      </PageSection>
      <style jsx>{`
        .container {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .title_container {
          padding: 20px 50px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .title_container h2 {
          font-size: 60px;
          color: ${theme.primary.lightGreen};
          font-weight: bold;
          width: 40%;
        }
        .service {
          width: 100%;
          height: 100%;
          max-height: 500px;
          background-color: ${theme.primary.lightGreen};
          padding: 20px 50px;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
        }
        .service_info_container {
          display: flex;
          flex-direction: column;
          color: ${theme.secondary.white};
          width: 40%;
        }
        .service_info_container h3 {
          font-size: 60px;
          font-weight: bold;
          line-height: 100%;
        }
        .service_info_container p {
          width: 100%;
          font-size: 24px;
          margin-top: 15px;
        }
        .image_container {
          height: 550px;
          color: ${theme.secondary.white};
          font-size: 28px;
          margin-top: -150px;
          position: relative;
        }
        img {
          width: 100%;
          height: 100%;
        }
        .image_container div {
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 0px 12px;
        }
        @media screen and (max-width: 1920px) {
          .service_info_container h3,
          .title_container h2 {
            font-size: var(--d-title-fontsize);
          }
          .service_info_container p {
            font-size: var(--d-text-fontsize);
          }
          .image_container {
            height: 450px;
            width: 50%;
          }
          .image_container img {
            object-fit: cover;
          }
          .service {
            max-height: 400px;
          }
        }
        @media screen and (max-width: 1000px) {
          .service_info_container h3,
          .title_container h2 {
            font-size: 35px;
          }
          .service_info_container p {
            font-size: 16px;
          }
          .service {
            padding: 20px;
            max-height: 350px;
          }
          .image_container {
            left: 20px;
            height: 380px;
            margin-top: -10vh;
          }
          .title_container {
            padding: 20px;
          }
        }
        @media screen and (max-width: 800px) {
          .title_container div {
            display: none;
          }
          .title_container h2 {
            width: 100%;
            font-size: 30px;
          }
          .image_container {
            display: none;
          }
          .service_info_container {
            width: 100%;
          }
          .service_info_container h3 {
            font-size: 30px;
          }
          .service_info_container p {
            width: 100%;
            font-size: clamp(14px, 2vw, 16px);
          }
        }
      `}</style>
    </>
  );
}

export default OurServices;
