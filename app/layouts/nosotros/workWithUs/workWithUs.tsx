"use client";
import React, { useState } from "react";

import CenterDiv from "@/app/components/center-div";
import { theme } from "@/app/common/styles/themes/theme";
import FormButton from "@/app/components/button/form-button";
import UploadManager from "@/app/components/uploadManager/upload-manager";

function WorkWithUs() {
  const [form, setForm] = useState({
    file: "",
  });

  const handleFile = (e: React.FormEvent<HTMLInputElement>) => {
    const file = e.currentTarget.value[0];
    setForm({
      ...form,
      file,
    });
  };

  const submitForm = (e: any) => {
    e.preventDefault();

    const message = "hola";
    const num = 3413880895;

    const whatsappUrl = `https://wa.me/${num}?text=${`Hola! Mi nombre es ${message}`}&file=${
      form.file
    }`;

    window.open(whatsappUrl, "_blank");
  };

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
          padding: 0px 0px 100px 100px;
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
          margin-top: 25px;
        }
        input[type="file"] {
          color: ${!form.file
            ? theme.secondary.lightGrey
            : theme.secondary.darkGrey};
        }
        input[type="file"]::-webkit-file-upload-button {
          visibility: hidden;
        }
        input[type="file"]::before {
          content: "Seleccionar documento";
          display: inline-block;
          background: ${form.file ? theme.secondary.lightGrey : "transparent"};
          border: 1px solid ${theme.secondary.lightGrey};
          border-radius: 3px;
          padding: 10px 12px;
          outline: none;
          white-space: nowrap;
          -webkit-user-select: none;
          cursor: ${!form.file ? "pointer" : "normal"};
          font-size: 18px;
        }
      `}</style>
    </>
  );
}

export default WorkWithUs;
