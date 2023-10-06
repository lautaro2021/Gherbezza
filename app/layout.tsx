import "./common/styles/globals.css";
import { AppProvider } from "./store/context/context";
import Script from "next/script";

import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Loader from "./components/loader/loader";

import StyledJsxRegistry from "./registry";

import { theme } from "./common/styles/themes/theme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppProvider>
      <html lang="es">
        <Script
          src="https://upload-widget.cloudinary.com/global/all.js"
          type="text/javascript"
        ></Script>
        <body>
          <Loader />
          <Navbar
            textColor={theme.secondary.white}
            backgroundColor="transparent"
          />
          <StyledJsxRegistry>{children}</StyledJsxRegistry>
          <Footer />
        </body>
      </html>
    </AppProvider>
  );
}
