"use client";
import React from "react";

import Navbar from "../navbar/navbar";

import { footerOptions } from "@/app/common/utils/footer-options";
import { footerSocial } from "@/app/common/utils/footer-options";
import OptionsFooterInterface from "@/app/types/footer-options.type";
import { theme } from "@/app/common/styles/themes/theme";

function Footer() {
  return (
    <>
      <footer>
        <Navbar footerPosition={true} />
        <div className="footer_options_container">
          <p>
            Líderes en turbinas neumáticas y tecnología agrícola. Unimos calidad
            y innovación. Únete para impulsar la agricultura del futuro con
            soluciones tecnológicas de excelencia.
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
      </footer>
      <style jsx>{`
        footer {
          width: 100%;
          height: 600px;
          background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
            url(/images/footer/background-footer.png);
          background-position: center;
          background-size: cover;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        img {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
        .footer_options_container {
          max-width: 1920px;
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
        }
      `}</style>
    </>
  );
}

export default Footer;
