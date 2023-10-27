import styles from './component.module.scss';
import img from '../../assets/profile.jpg';

export function Presentation() {
  return (
    <section className={styles.Presentation}>
      <img src={img} alt='profile image' className={styles.Image} />

      <div className={styles.Content}>
        <h3>Luis Berrezueta C.</h3>
        <h4>Desarrollador de software</h4>
        <p>
          Ingeniero en TIC especializado en desarrollo de software para aplicaciones web y móviles. Habilidades en
          JavaScript, TypeScript, React, Angular, NodeJs, Flutter y más, junto con la gestión de bases de datos SQL y
          NoSQL. Colaboración en equipos ágiles, adherencia a buenas prácticas y compromiso con el aprendizaje continuo.
        </p>
      </div>
    </section>
  );
}
