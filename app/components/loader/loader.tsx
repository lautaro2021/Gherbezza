"use client";
import { theme } from "@/app/common/styles/themes/theme";

function Loader() {
  return (
    <>
      <section>
        <img
          src="/images/logo/logo-byn.png"
          alt="logo gherbezza turbinas para sembradoras"
          title="gherbezza turbinas para sembradoras"
        />
      </section>
      <style jsx>{`
        section {
          width: 100%;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: ${theme.primary.darkGreen};
          z-index: 2000;
          position: fixed;
          top: 0;
          left: 0;
          overflow: hidden;
        }
        img {
          width: 250px;
          filter: brightness(5);
          animation: aparecer 1.25s ease infinite;
          opacity: 0;
        }
        @keyframes aparecer {
            0%{
                opacity: 0;
            }
            50%{
                opacity: 1;
            }
            100%{
                opacity: 0;
            }
        }
        }
      `}</style>
    </>
  );
}

export default Loader;
