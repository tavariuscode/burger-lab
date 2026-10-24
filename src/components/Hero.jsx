import React from 'react';
import { ArrowRight, Clock, MapPin } from 'lucide-react';
// Importação crucial para o CSS Modules funcionar
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      
      {/* Bloco de Conteúdo (Molécula) */}
      <div className={styles.textContent}>
        <span className={styles.badge}>
          🔥 Inauguração com Cashback Ativo
        </span>
        
        <h1 className={styles.title}>
          Não é apenas fast food.<br />
          <span className={styles.highlight}>É arte em forma de Burger.</span>
        </h1>
        
        <p className={styles.description}>
          Blend artesanal de 150g, pão brioche selado na manteiga e receitas exclusivas desenvolvidas por chefs renomados.
        </p>
        
        <div className={styles.ctaGroup}>
          <button className={styles.button}>
            Peça Agora no Menu <ArrowRight size={18} />
          </button>
          
          <div className={styles.metaInfo}>
            <span className={styles.infoItem}>
              <Clock className={styles.iconAmber} size={16} /> 25-40 min
            </span>
            <span className={styles.infoItem}>
              <MapPin className={styles.iconAmber} size={16} /> Entrega Local
            </span>
          </div>
        </div>
      </div>
      
      {/* Bloco de Imagem (Molécula) */}
      <div className={styles.imageWrapper}>
        <div className={styles.glow}></div>
        <div className={styles.imageFrame}>
          <img 
            src="https://unsplash.com" 
            alt="Burger Premium Lab" 
            className={styles.burgerImage}
          />
        </div>
      </div>

    </section>
  );
}
