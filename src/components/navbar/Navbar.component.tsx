import { IoCloseOutline } from 'react-icons/io5';
import styles from './component.module.scss';

interface Props {
  isMenuOpen: boolean;
  closeMenu: () => void;
}

export function Navbar({ closeMenu, isMenuOpen }: Props) {
  return (
    <nav className={`${styles.Navbar} ${isMenuOpen ? styles.Open : null}`}>
      <IoCloseOutline className={styles.CloseMenu} size={25} onClick={closeMenu} />

      <ul className={styles.List}>
        <li className={styles.Element}>
          <a href='#' className={styles.Link}>
            Inicio
          </a>
        </li>
        <li className={styles.Element}>
          <a href='#' className={styles.Link}>
            Acerca de
          </a>
        </li>
        <li className={styles.Element}>
          <a href='#' className={styles.Link}>
            Trabajos
          </a>
        </li>
        <li className={styles.Element}>
          <a href='#' className={styles.Link}>
            Contacto
          </a>
        </li>
      </ul>

      <ul className={styles.ListSocialLinks}>
        <li className={styles.Element}>
          <a href='#' className={styles.Link}>
            Twitter
          </a>
        </li>
        <li className={styles.Element}>
          <a href='#' className={styles.Link}>
            GitHub
          </a>
        </li>
        <li className={styles.Element}>
          <a href='#' className={styles.Link}>
            LinkedIn
          </a>
        </li>
      </ul>
    </nav>
  );
}
