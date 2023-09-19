"use client";
import "./common/styles/globals.css";
import { AppProvider } from "./store/context/context";
import Script from "next/script";

import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Powered from "./components/footer/powered";
import Loader from "./components/loader/loader";

import StyledJsxRegistry from "./registry";

import { theme } from "./common/styles/themes/theme";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoader(false);
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <AppProvider>
      <html lang="es">
        <Script
          src="https://upload-widget.cloudinary.com/global/all.js"
          type="text/javascript"
        ></Script>
        <body>
          {loader ? (
            <Loader />
          ) : (
            <>
              <Navbar
                textColor={theme.secondary.white}
                backgroundColor="transparent"
              />
              <StyledJsxRegistry>{children}</StyledJsxRegistry>
              <Footer />
              <Powered />
            </>
          )}
        </body>
      </html>
    </AppProvider>
  );
}
