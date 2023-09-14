"use client";
import React, { useEffect, useState } from "react";
import { useAppContext } from "@/app/store/context/context";
import emailjs from "@emailjs/browser";

import CenterDiv from "@/app/components/center-div";
import { theme } from "@/app/common/styles/themes/theme";
import FormButton from "@/app/components/button/form-button";
import UploadManager from "@/app/components/uploadManager/upload-manager";

type FormType = {
  file: string | undefined;
  job: string;
  name: string;
  country: string;
};

const initialForm = {
  file: "",
  job: "",
  name: "",
  country: "",
};

function WorkWithUs() {
  const { uploadedFile } = useAppContext();
  const JOB_OPPORTUNITIES = [
    "Área técnica",
    "Ingeniería",
    "Administración",
    "Operario",
  ];

  const [form, setForm] = useState<FormType>(initialForm);

  const handleForm = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qyefga7",
        "template_cjha2xx",
        e.target,
        "EQ_zqGb2OP0BOi-d5"
      )
      .then(() => {
        alert("");
        setForm(initialForm);
      });
  };

  useEffect(() => {
    setForm({
      ...form,
      file: uploadedFile,
    });
  }, [uploadedFile]);

  return (
    <>
      <section>
        <video
          autoPlay
          loop
          muted
          playsInline
          id="WorkWithUs%20-%20background"
          poster="https://res.cloudinary.com/dn72zz8r5/image/upload/v1693931234/985084434-4c7594b1e9bec5a2acc34a6f311efa391d23389a5b1d171cf23fb1c8ba5c3946-d_cf4k2p.avif"
        >
          <source
            src="https://res.cloudinary.com/dn72zz8r5/video/upload/v1693931548/pexels-tima-miroshnichenko-5846668_1080p_jxk0bb.mp4"
            type="video/mp4"
          />
        </video>
        <CenterDiv>
          <div className="container">
            <div className="modal">
              <h3>Se parte del equipo</h3>
              <UploadManager />
              <form onSubmit={submitForm}>
                <input
                  hidden
                  value={form.file}
                  name="file"
                  onChange={handleForm}
                />
                <input
                  type="text"
                  required
                  placeholder="Nombre(*)"
                  name="name"
                  value={form.name}
                  onChange={handleForm}
                />
                <input
                  type="text"
                  required
                  placeholder="Ciudad(*)"
                  name="country"
                  value={form.country}
                  onChange={handleForm}
                />
                <select
                  required
                  name="job"
                  value={form.job}
                  onChange={handleForm}
                >
                  <option value="" hidden disabled>
                    Seleccionar puesto(*)
                  </option>
                  {JOB_OPPORTUNITIES.map((job: string, index: number) => (
                    <option value={job} key={index}>
                      {job}
                    </option>
                  ))}
                </select>
                <FormButton
                  text="Enviar"
                  textColor={theme.secondary.lightGrey}
                  type="submit"
                  borderColor={theme.secondary.white}
                  background="transparent"
                  disabled={uploadedFile ? false : true}
                />
              </form>
            </div>
          </div>
        </CenterDiv>
      </section>
      <style jsx>{`
        section {
          width: 100%;
          height: 70dvh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        video {
          aspect-ratio: 16/9;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%) brightness(0.5);
          z-index: -1;
        }
        .container {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: flex-end;
          justify-content: flex-start;
          padding: 0px 0px 100px 0px;
        }
        .modal {
          background-color: rgba(134, 134, 134, 0.2);
          width: 100%;
          max-width: 700px;
          padding: 40px;
        }
        h3 {
          font-size: 40px;
          color: ${theme.secondary.white};
          font-weight: bold;
        }
        form {
          display: flex;
          flex-direction: column;
          gap: 50px;
          margin-top: 25px;
        }
        input,
        select {
          max-width: 50%;
          border: none;
          background: none;
          border-bottom: 1px solid ${theme.secondary.white};
          padding: 5px 10px;
          color: ${theme.secondary.lightGrey};
          font-size: 18px;
        }
        select {
          color: ${theme.secondary.lightGrey};
        }
        input:focus,
        select:focus {
          outline: 0;
        }
      `}</style>
    </>
  );
}

export default WorkWithUs;
