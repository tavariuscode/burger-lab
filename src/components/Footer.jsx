import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyText}>
        © {new Date().getFullYear()} BurgerLab S/A. Arquitetura estruturada via Atomic Design com HTML, CSS Modules e React.
      </p>
    </footer>
  );
}
