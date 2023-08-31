import React from "react";

function CenterDiv({ children }: any) {
  return (
    <>
      <div>{children}</div>
      <style jsx>{`
        div {
          max-width: 1500px;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </>
  );
}

export default CenterDiv;
