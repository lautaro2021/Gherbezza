"use client";
import React from "react";

import { theme } from "@/app/common/styles/themes/theme";

function Powered() {
  return (
    <>
      <section>
        <a
          href="https://www.neuroexperience.com.ar/"
          target="_blank"
          rel="noreferrer"
        >
          <h6>
            Gherbezza® 2023. Todos los derechos reservados. Powered by{" "}
            <strong>Neuro®</strong>
          </h6>
        </a>
      </section>
      <style jsx>{`
        section {
          width: 100%;
          padding: 8px 0px;
          text-align: center;
          background-color: ${theme.secondary.darkGrey};
          color: ${theme.secondary.white};
        }
        h6 {
          font-weight: 400;
        }
      `}</style>
    </>
  );
}

export default Powered;
