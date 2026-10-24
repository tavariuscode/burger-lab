import React from 'react';
import { ShoppingBag, Flame } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        
        {/* Logo (Átomo/Molécula) */}
        <a href="#inicio" className={styles.logo}>
          BURGER<span className={styles.logoHighlight}>LAB</span>
          <Flame size={20} className={styles.logoIcon} />
        </a>

        {/* Menu de Navegação (Molécula) */}
        <nav className={styles.navigation}>
          <a href="#inicio" className={styles.navLink}>Início</a>
          <a href="#cardapio" className={styles.navLink}>Cardápio</a>
          <a href="#fidelidade" className={styles.navLink}>Fidelidade</a>
          <a href="#blog" className={styles.navLink}>Blog</a>
        </nav>

        {/* Botão de Chamada de Ação (Átomo) */}
        <button className={styles.menuButton}>
          <ShoppingBag size={16} />
          Ver Cardápio
        </button>

      </div>
    </header>
  );
}
