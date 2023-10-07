"use client";
import React from "react";

import FooterNavbar from "../navbar/footer-navbar";
import Powered from "./powered";

import { footerOptions } from "@/app/common/utils/footer-options";
import { footerSocial } from "@/app/common/utils/footer-options";
import OptionsFooterInterface from "@/app/types/footer-options.type";
import { theme } from "@/app/common/styles/themes/theme";
import CenterDiv from "../center-div";

function Footer() {
  return (
    <>
      <footer>
        <FooterNavbar />
        <CenterDiv>
          <div className="footer_options_container">
            <p>
              Líderes en turbinas neumáticas y tecnología agrícola. Unimos
              calidad y innovación. Únete para impulsar la agricultura del
              futuro con soluciones tecnológicas de excelencia.
            </p>
            <ul>
              {footerOptions.map((option: OptionsFooterInterface) => (
                <li key={option.description}>
                  <span>{option.description}</span>
                </li>
              ))}
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
            </ul>
          </div>
        </CenterDiv>
      </footer>
      <Powered />
      <style jsx>{`
        footer {
          width: 100%;
          height: 600px;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
            url("/images/footer/background.webp");
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
        }
        .footer_options_container {
          width: 100%;
          display: flex;
          justify-content: space-between;
        }
        .footer_options_container p {
          max-width: 700px;
          font-size: 20px;
          color: ${theme.secondary.lightGrey};
        }
        .footer_options_container ul {
          display: flex;
          flex-direction: column;
          align-items: end;
          gap: 12px;
        }
        .footer_options_container ul li {
          list-style: none;
          color: ${theme.secondary.lightGrey};
        }
        .footer_options_container div {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          padding: 25px 0px;
        }
        .footer_options_container div img {
          width: 40px;
          height: 40px;
          transition: all 0.2s ease;
        }
        .footer_options_container div img:hover {
          filter: brightness(2);
        }
        @media screen and (max-width: 1920px) {
          .footer_options_container p {
            font-size: clamp(16px, 1.042vw, 20px);
          }
        }
        @media screen and (max-width: 1200px) {
          .footer_options_container p {
            max-width: 50%;
          }
        }
        @media screen and (max-width: 1000px) {
          footer {
            height: 500px;
          }
        }
        @media screen and (max-width: 760px) {
          footer {
            height: 400px;
          }
          .footer_options_container p {
            display: none;
          }
          .footer_options_container ul {
            width: 100%;
          }
          .footer_options_container div img {
            width: 30px;
            height: 30px;
          }
        }
      `}</style>
    </>
  );
}

export default Footer;
