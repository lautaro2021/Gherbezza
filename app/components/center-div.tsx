import React from "react";

function CenterDiv({ children }: any) {
  return (
    <>
      <div>{children}</div>
      <style jsx>{`
        div {
          max-width: 1920px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
      `}</style>
    </>
  );
}

export default CenterDiv;
