import styles from "./Error404.module.css";

const Error404 = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Error 404</h2>
      <h3>Ops!</h3>
      <p className={styles.description}>
        No hemos encontrado la ruta que buscas
      </p>
    </div>
  );
};

export default Error404;
