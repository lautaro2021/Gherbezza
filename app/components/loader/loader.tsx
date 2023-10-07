"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

import styles from "./loader.module.css";

function Loader() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoaded(true);
    }, 3000);

    window.scrollTo(0, 0);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {!loaded && (
        <section className={styles.section}>
          <Image
            src="/images/logo/logo-byn.webp"
            alt="logo gherbezza turbinas para sembradoras"
            title="gherbezza turbinas para sembradoras"
            className={styles.image}
            width={250}
            height={140}
          />
        </section>
      )}
    </>
  );
}

export default Loader;
