import React from "react";
import { usePathname } from "next/navigation";

function getCurrentPathname() {
  const pathname = usePathname();

  return pathname;
}

export default getCurrentPathname;
