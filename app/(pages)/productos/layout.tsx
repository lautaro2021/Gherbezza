"use client";
import React from "react";

import Hero from "@/app/layouts/productos/hero";
import ProductsNavbar from "@/app/components/products-navbar/products-navbar";

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
