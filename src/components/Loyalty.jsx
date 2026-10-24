import React from 'react';
import { Award } from 'lucide-react';
import styles from './Loyalty.module.css';

export default function Loyalty() {
  return (
    <section id="fidelidade" className={styles.loyaltySection}>
      <div className={styles.cardContainer}>
        
        <Award size={280} className={styles.bgIcon} />
        
        <div className={styles.infoBlock}>
          <h2 className={styles.title}>
            Faça parte do clube e garanta refeições grátis!
          </h2>
          <p className={styles.description}>
            Cadastre-se na nossa plataforma e garanta <strong>10% de Cashback acumulado</strong> em todas as compras para descontar quando quiser.
          </p>
        </div>

        <button className={styles.button}>
          <Award size={18} />
          Criar Minha Conta Virtual
        </button>

      </div>
    </section>
  );
}
