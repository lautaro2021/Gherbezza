import React, { useEffect, useRef } from "react";

function UploadManager() {
  const cloudinaryRef = useRef<any>();
  const widgetRef = useRef<any>();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dn72zz8r5",
        uploadPreset: "frnjfs47",
      },
      function (error: any, result: any) {
        console.log(result);
      }
    );
  }, []);

  return <button onClick={() => widgetRef.current.open()}>Upload</button>;
}

export default UploadManager;
