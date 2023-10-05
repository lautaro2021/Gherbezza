"use client";
import { useState, useEffect } from "react";

import styles from "./loader.module.css";

function Loader() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      window.scrollTo(0, 0);
      setLoaded(true);
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {!loaded && (
        <section className={styles.section}>
          <img
            src="/images/logo/logo-byn.webp"
            alt="logo gherbezza turbinas para sembradoras"
            title="gherbezza turbinas para sembradoras"
            fetchPriority="high"
            className={styles.image}
          />
        </section>
      )}
    </>
  );
}

export default Loader;
