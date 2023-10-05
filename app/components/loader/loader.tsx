import styles from "./loader.module.css";

function Loader() {
  return (
    <>
      <section className={styles.section}>
        <img
          src="/images/logo/logo-byn.webp"
          alt="logo gherbezza turbinas para sembradoras"
          title="gherbezza turbinas para sembradoras"
          fetchPriority="high"
          className={styles.image}
        />
      </section>
    </>
  );
}

export default Loader;
