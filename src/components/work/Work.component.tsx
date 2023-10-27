import styles from './component.module.scss';

import {
  IoBookOutline,
  IoBrushOutline,
  IoConstructOutline,
  IoDesktopOutline,
  IoPhonePortraitOutline,
} from 'react-icons/io5';

export function Work() {
  return (
    <section className={styles.Section}>
      <h3 className={styles.TitleSection}>Como trabajo</h3>

      <div className={styles.Container}>
        <div className={styles.Card}>
          <span className={styles.Percentage}>80%</span>

          <div className={styles.Content}>
            <IoBookOutline className={`${styles.Icon} ${styles.Study}`} />
            <p className={styles.Title}>Estudio y planificación</p>
            <p className={styles.Text}>
              Trabajo profesional en la identificación y solución de problemas mediante soluciones informáticas para un
              rendimiento óptimo.
            </p>
          </div>
        </div>

        <div className={styles.Card}>
          <span className={styles.Percentage}>70%</span>

          <div className={styles.Content}>
            <IoBrushOutline className={`${styles.Icon} ${styles.Design}`} />
            <p className={styles.Title}>Diseño UI/UX</p>
            <p className={styles.Text}>
              Especialista en diseños profesionales para sistemas móviles y web que garantizan una experiencia
              excepcional.
            </p>
          </div>
        </div>

        <div className={styles.Card}>
          <span className={styles.Percentage}>96%</span>

          <div className={styles.Content}>
            <IoDesktopOutline className={`${styles.Icon} ${styles.Web}`} />
            <p className={styles.Title}>Desarrollo web</p>
            <p className={styles.Text}>
              Creación de sistemas web completos para negocios de cualquier tipo, utilizando tecnologías punteras para
              ofrecer soluciones de alta calidad.
            </p>
          </div>
        </div>

        <div className={styles.Card}>
          <span className={styles.Percentage}>75%</span>

          <div className={styles.Content}>
            <IoPhonePortraitOutline className={`${styles.Icon} ${styles.Mobile}`} />
            <p className={styles.Title}>Desarrollo móvil</p>
            <p className={styles.Text}>
              Desarrollo de aplicaciones para Android e iOS que cumplen con los estándares más altos de calidad,
              garantizando una experiencia móvil impecable.
            </p>
          </div>
        </div>

        <div className={styles.Card}>
          <span className={styles.Percentage}>50%</span>

          <div className={styles.Content}>
            <IoConstructOutline className={`${styles.Icon} ${styles.Management}`} />
            <p className={styles.Title}>Mantenimiento y migración</p>
            <p className={styles.Text}>
              Ofrezco servicios de mantenimiento y soporte para sistemas existentes, llevándolos a nuevos niveles de
              calidad y modernidad mediante procesos de migración cuidadosos y expertos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
