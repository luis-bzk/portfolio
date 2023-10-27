import styles from './component.module.scss';

export function Hero() {
  return (
    <section className={styles.Section}>
      <div className={`${styles.Card} ${styles.Web}`}>
        <div className={styles.Content}>
          <h2>Desarrollo Web</h2>
          <p>Planificación, diseño, y construcción de sitios web.</p>
        </div>
      </div>

      <div className={`${styles.Card} ${styles.Profile}`}>
        <div className={styles.ImageProfile}></div>

        <h2 className={styles.Name}>Luis Berrezueta</h2>

        <p className={styles.Text}>Desarrollando la creatividad</p>
      </div>

      <div className={`${styles.Card} ${styles.Mobile}`}>
        <div className={styles.Content}>
          <h2>Desarrollo Movil</h2>
          <p>Construcción de aplicaciones móviles para Android y IOS.</p>
        </div>
      </div>
    </section>
  );
}
