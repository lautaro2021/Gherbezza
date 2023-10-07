import { Metadata } from "next";

import Hero from "@/app/layouts/productos/hero";
import ProductsNavbar from "@/app/components/navbar/products-navbar";

export const metadata: Metadata = {
  title:
    "Nuestros productos | Gherbezza - Turbinas neumáticas para sembradoras",
  description:
    "Explora nuestra gama de productos de calidad superior en Gherbezza. Descubre nuestras tres líneas principales: Eolo, Airdrill y Vacuo, diseñadas para potenciar tu agricultura y optimizar tus cultivos.",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Hero />
      <ProductsNavbar />
      {children}
    </>
  );
}
