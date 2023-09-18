import "./common/styles/globals.css";
import type { Metadata } from "next";
import { AppProvider } from "./store/context/context";
import Script from "next/script";

import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Powered from "./components/footer/powered";
import Loader from "./components/loader/loader";
import { theme } from "./common/styles/themes/theme";

export const metadata: Metadata = {
  title: {
    default: "Gherbezza - Turbinas neumáticas para sembradoras",
    template: "%s | Gherbezza - Turbinas neumáticas para sembradoras",
  },
  description:
    "Bienvenido a la fábrica de turbinas neumáticas para sembradoras en Rosario, Santa Fe. Descubre nuestras avanzadas turbinas neumáticas para agricultura de precisión. Nuestros productos de alta calidad mejoran la eficiencia en la siembra, impulsando la productividad agrícola. Explora nuestras soluciones líderes en la industria y haz que tus sembradoras sean más precisas y rentables.",
};

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
          <>
            <Loader />
            <Navbar
              textColor={theme.secondary.white}
              backgroundColor="transparent"
            />
            {children}
            <Footer />
            <Powered />
          </>
        </body>
      </html>
    </AppProvider>
  );
}
