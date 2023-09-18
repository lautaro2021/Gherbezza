"use client";
import React, { useState } from "react";
import { FormEvent } from "react";
import Image from "next/image";

import CenterDiv from "@/app/components/center-div";
import { theme } from "@/app/common/styles/themes/theme";
import SectionTitles from "@/app/components/titles/section-titles";
import FormButton from "@/app/components/button/form-button";
import RouteText from "@/app/components/routeText";
import emailjs from "@emailjs/browser";

import { FormType } from "@/app/types/form.type";
import { intialForm } from "@/app/common/utils/initialForm";

function Contacto() {
  const [form, setForm] = useState<FormType>(intialForm);

  const changeValues = (
    e:
      | React.FormEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    emailjs
      .sendForm(
        "service_998q9p9",
        "template_cjha2xx",
        form,
        "EQ_zqGb2OP0BOi-d5"
      )
      .then(() => {
        alert("Su consulta fue enviada correctamente.");
        setForm(intialForm);
      });
  };

  return (
    <>
      <section>
        <CenterDiv>
          <div className="container">
            <form onSubmit={submitForm} action="POST" id="contact-form">
              <div className="title_container">
                <RouteText text="CONTACTO" linkedText="INICIO" />
                <SectionTitles
                  text="CONTACTO"
                  colorText={theme.secondary.black}
                />
              </div>

              <div className="input_container">
                <input
                  type="text"
                  required
                  placeholder="Nombre(*)"
                  name="name"
                  value={form.name}
                  onChange={changeValues}
                  autoComplete="name"
                />
                <input
                  type="text"
                  required
                  placeholder="Empresa(*)"
                  name="company"
                  value={form.company}
                  onChange={changeValues}
                  autoComplete="company"
                />
                <input
                  type="email"
                  required
                  placeholder="Email(*)"
                  name="email"
                  value={form.email}
                  onChange={changeValues}
                  autoComplete="email"
                />
                <input
                  type="number"
                  required
                  placeholder="Teléfono(*)"
                  name="phone"
                  value={form.phone || ""}
                  onChange={changeValues}
                  autoComplete="phone"
                />
                <input
                  type="text"
                  required
                  placeholder="Ciudad(*)"
                  name="city"
                  value={form.city}
                  onChange={changeValues}
                  autoComplete="country"
                />
                <textarea
                  placeholder="Tu consulta(*)"
                  required
                  name="text"
                  onChange={changeValues}
                  value={form.text}
                />
              </div>
              <FormButton
                text="Enviar"
                textColor={theme.secondary.black}
                background={theme.secondary.white}
                type="submit"
              />
            </form>
            <div className="info_container">
              <div className="image_container">
                <Image
                  src="/images/layouts/contacto/background.webp"
                  alt="Contacto - Gherbezza turbinas neumaticas para sembradoras"
                  title="Contacto - Gherbezza turbinas neumaticas para sembradoras"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                  placeholder="blur"
                  blurDataURL="/images/layouts/contacto/background.webp"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="location_info">
                <h3>DIRECCIÓN</h3>
                <strong>Calle 1910 N° 4533F, S2010FQA Rosario, Santa Fe</strong>
              </div>
              <div className="info">
                <h3>INFORMACIÓN</h3>
                <div>
                  <strong>Tel: 0341 - 459 9468</strong>
                  <strong>Email: info@gherbezza.com</strong>
                </div>
              </div>
            </div>
          </div>
        </CenterDiv>
      </section>
      <style jsx>{`
        section {
          width: 100%;
          height: 100dvh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .container {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        form {
          flex: 1;
          height: 70%;
          display: flex;
          flex-direction: column;
          gap: 50px;
          padding: 0px 50px 0px 0px;
        }
        .title_container {
          display: flex;
          flex-direction: column;
        }
        .input_container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(6, 1fr);
          grid-column-gap: 20px;
          grid-row-gap: 0px;
          height: 70%;
        }
        .input_container input {
          border: none;
          border-bottom: 1px solid ${theme.secondary.black};
          font-size: 18px;
          padding: 5px 12px;
          height: 50px;
        }
        input[type="number"]::-webkit-outer-spin-button,
        input[type="number"]::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        .input_container input:focus {
          outline: 0;
        }
        .input_container input:nth-child(3) {
          grid-area: 2 / 1 / 3 / 3;
        }
        textarea {
          grid-area: 4 / 1 / 7 / 3;
          resize: none;
          border: none;
          border-bottom: 1px solid ${theme.secondary.black};
          padding: 5px 12px;
          font-size: 18px;
        }
        textarea:focus {
          outline: 0;
        }
        .info_container {
          flex: 1;
          height: 70%;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(4, 1fr);
          grid-column-gap: 0px;
          grid-row-gap: 0px;
          color: ${theme.secondary.white};
        }
        .image_container {
          grid-area: 1 / 1 / 4 / 3;
          position: relative;
        }
        .location_info {
          grid-area: 4 / 1 / 5 / 2;
          background-color: ${theme.primary.lightGreen};
          padding: 1.85vw;
          display: flex;
          flex-direction: column;
          gap: 30px;
          font-size: 18px;
        }
        .location_info strong,
        .info strong {
          font-weight: 200;
          display: block;
        }
        .info {
          grid-area: 4 / 2 / 5 / 3;
          background-color: ${theme.primary.orange};
          padding: 1.85vw;
          display: flex;
          flex-direction: column;
          gap: 30px;
          font-size: 18px;
        }
      `}</style>
    </>
  );
}

export default Contacto;
