import React, { useEffect, useRef, useState } from "react";
import { useAppContext } from "@/app/store/context/context";
import { theme } from "@/app/common/styles/themes/theme";

/*eslint-disable*/
function UploadManager() {
  const { updateFile } = useAppContext();
  const cloudinaryRef = useRef<any>();
  const widgetRef = useRef<any>();

  const [fileName, setFileName] = useState("");

  useEffect(() => {
    cloudinaryRef.current = window?.cloudinary;
    widgetRef.current = cloudinaryRef?.current?.createUploadWidget(
      {
        cloudName: "dn72zz8r5",
        uploadPreset: "frnjfs47",
        clientAllowedFormats: ["jpg", "png", "jpeg"],
        multiple: false,
        sources: ["local"],
        maxImageFileSize: 8000000,
      },
      function (error: any, result: any) {
        if (result.event === "success") {
          const fileUrl = result.info.secure_url;
          updateFile(fileUrl);
          setFileName(result.info.original_filename);
        }
      }
    );
  }, []);

  return (
    <>
      <div>
        <button
          onClick={() => widgetRef.current.open()}
          disabled={fileName ? true : false}
        >
          Seleccionar archivo
        </button>
        {fileName ? (
          <div className="file_name">
            <span>{fileName}</span>
          </div>
        ) : (
          <span style={{ color: `${theme.secondary.lightGrey}` }}>(*)</span>
        )}
      </div>
      <style jsx>{`
        div {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .file_name {
          color: ${theme.secondary.darkGrey};
          max-width: 20ch;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        span {
          white-space: nowrap;
        }
        button {
          background: ${fileName ? theme.secondary.greyBackground : "none"};
          padding: 10px 16px;
          font-size: 18px;
          cursor: pointer;
          border: 1px solid ${theme.secondary.white};
          color: ${theme.secondary.lightGrey};
          transition: all 0.3s ease;
          margin: 25px 0px;
        }
        button:hover {
          background-color: ${theme.secondary.white};
          color: ${theme.secondary.black};
        }
      `}</style>
    </>
  );
}

export default UploadManager;
