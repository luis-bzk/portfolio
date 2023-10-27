import { IoMenuSharp } from 'react-icons/io5';
import { HiMiniArrowUpRight } from 'react-icons/hi2';

import { Navbar } from '..';

import styles from './component.module.scss';
import { useState } from 'react';

export function Header() {
  const [openMenuMobile, setOpenMenuMobile] = useState(false);

  const openMenu = () => {
    setOpenMenuMobile(true);
  };

  const closeMenu = () => {
    setOpenMenuMobile(false);
  };

  return (
    <header className={styles.Header}>
      {/* a */}
      <ul className={styles.List}>
        <li className={styles.Element}>
          <a href='#' className={styles.Link}>
            Twitter
          </a>

          <HiMiniArrowUpRight className={styles.Icon} />
        </li>
        <li className={styles.Element}>
          <a href='#' className={styles.Link}>
            GitHub
          </a>

          <HiMiniArrowUpRight className={styles.Icon} />
        </li>
        <li className={styles.Element}>
          <a href='#' className={styles.Link}>
            LinkedIn
          </a>

          <HiMiniArrowUpRight className={styles.Icon} />
        </li>
      </ul>

      {/* b */}
      <h1 className={styles.TitleName}>
        <span>Luis B</span>
        <span>Portafolio</span>
      </h1>

      {/* icon menu */}
      <IoMenuSharp className={styles.MenuIcon} size={25} onClick={openMenu} />

      {/* c */}
      <Navbar isMenuOpen={openMenuMobile} closeMenu={closeMenu} />
    </header>
  );
}
