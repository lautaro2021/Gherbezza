"use client";
import React, { useEffect } from "react";

import Hero from "@/app/layouts/productos/hero";
import ProductsNavbar from "@/app/components/products-navbar/products-navbar";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero />
      <ProductsNavbar />
      {children}
    </>
  );
}
