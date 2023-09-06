"use client";
import "./common/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useAppContext, AppProvider } from "./store/context/context";

import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Powered from "./components/footer/powered";
import Loader from "./components/loader/loader";
import { useEffect, useState } from "react";
import { theme } from "./common/styles/themes/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

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
      <html lang="en">
        <head>
          <script
            src="https://upload-widget.cloudinary.com/global/all.js"
            type="text/javascript"
          ></script>
        </head>
        <body className={inter.className}>
          {loader ? (
            <Loader />
          ) : (
            <>
              <Navbar
                textColor={theme.secondary.white}
                backgroundColor="transparent"
              />
              {children}
              <Footer />
              <Powered />
            </>
          )}
        </body>
      </html>
    </AppProvider>
  );
}
