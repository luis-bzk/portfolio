import styles from './component.module.scss';

export function Services() {
  return (
    <section className={styles.Section}>
      <h3 className={styles.TitleSection}>Servicios disponibles</h3>

      <div className={styles.Container}>
        <div className={`${styles.Card} ${styles.Service}`}>
          <div className={styles.Content}>
            <span className={styles.Title}>Sistema para venta registro, control y venta de productos</span>
            <p className={styles.Text}>
              Sistema web innovador diseñado para gestionar de forma eficiente el inventario de productos, ofreciendo un
              completo control sobre clientes y artículos. Permite realizar ventas de manera intuitiva y llevar un
              registro detallado de cada transacción. Esta herramienta potencia el negocio al máximo, optimizando sus
              capacidades y asegurando una gestión integral y efectiva.
            </p>

            <span className={styles.Tag}>Próximamente...</span>
          </div>
        </div>

        <div className={`${styles.Card} ${styles.Travel}`}>
          <div className={styles.Content}>
            <span className={styles.Title}>Tinpa Club</span>
            <p className={styles.Text}>
              Explora Ecuador con nuestro revolucionario sistema web, diseñado para simplificar tu búsqueda de hoteles,
              casas de alquiler, sitios recreativos, asistencias y todas las demás experiencias vacacionales que puedas
              imaginar. Con nuestra plataforma intuitiva, descubre los tesoros ocultos del país mientras planificas unas
              vacaciones inolvidables.
            </p>

            <span className={styles.Tag}>Próximamente...</span>
          </div>
        </div>
      </div>
    </section>
  );
}
