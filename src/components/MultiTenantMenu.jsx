import React, { useState } from 'react';
import { useCart } from '../CartContext';
import styles from './MultiTenantMenu.module.css';

export default function MultiTenantMenu({ database }) {
  const { addToCart } = useCart();
  
  // Estado para controlar qual Inquilino está ativo no visualizador
  const [currentTenant, setCurrentTenant] = useState('hamburgueria');
  const [activeCategory, setActiveCategory] = useState('todos');

  // Captura os dados em tempo real vindos do estado centralizado no App.jsx
  const tenantData = database[currentTenant];

  // Garante que o sistema não quebre caso os dados demorem a carregar
  if (!tenantData) {
    return <p style={{ color: '#a3a3a3', textAlign: 'center' }}>Carregando dados do inquilino...</p>;
  }

  // Regra de filtragem de categorias
  const filteredItems = activeCategory === 'todos'
    ? tenantData.products
    : tenantData.products.filter(item => item.category === activeCategory);

  // Injeção de propriedades customizadas para o CSS Modules ler dinamicamente
  const themeInlineStyles = {
    '--color-primary': tenantData.theme.primaryColor,
    '--text-on-primary': tenantData.theme.textOnPrimary,
    '--bg-main': tenantData.theme.bgMain
  };

  return (
    <section className={styles.section} style={themeInlineStyles}>
      
      {/* SIMULADOR SAAS: Chaveador de URLs para demonstração em aula */}
      <div className={styles.tenantSwitcher}>
        <span className={styles.switcherLabel}>Visualizar Site do Cliente (Tenant Ativo):</span>
        <div className={styles.switcherButtons} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          <button 
            className={`${styles.switchBtn} ${currentTenant === 'hamburgueria' ? styles.switchBtnActive : ''}`}
            onClick={() => { setCurrentTenant('hamburgueria'); setActiveCategory('todos'); }}
          >
            🍔 Hamburgueria
          </button>
          <button 
            className={`${styles.switchBtn} ${currentTenant === 'barbearia' ? styles.switchBtnActive : ''}`}
            onClick={() => { setCurrentTenant('barbearia'); setActiveCategory('todos'); }}
          >
            💈 Barbearia
          </button>
          <button 
            className={`${styles.switchBtn} ${currentTenant === 'corrida' ? styles.switchBtnActive : ''}`}
            onClick={() => { setCurrentTenant('corrida'); setActiveCategory('todos'); }}
          >
            🏃 Corrida
          </button>
          <button 
            className={`${styles.switchBtn} ${currentTenant === 'surf' ? styles.switchBtnActive : ''}`}
            onClick={() => { setCurrentTenant('surf'); setActiveCategory('todos'); }}
          >
            🏄 Surf
          </button>
          <button 
            className={`${styles.switchBtn} ${currentTenant === 'forro' ? styles.switchBtnActive : ''}`}
            onClick={() => { setCurrentTenant('forro'); setActiveCategory('todos'); }}
          >
            🪗 Forró
          </button>
          <button 
            className={`${styles.switchBtn} ${currentTenant === 'turismo' ? styles.switchBtnActive : ''}`}
            onClick={() => { setCurrentTenant('turismo'); setActiveCategory('todos'); }}
          >
            🏖️ Turismo
          </button>
        </div>
      </div>

      {/* Menu de Categorias Dinâmico com Scroll Horizontal */}
      <div className={styles.categoriesNav}>
        {tenantData.categories.map((cat) => (
          <button
            key={cat.id}
            className={`${styles.categoryBtn} ${activeCategory === cat.id ? styles.categoryBtnActive : ''}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.id === 'todos' ? tenantData.vocabulary.categoryAll : cat.label}
          </button>
        ))}
      </div>

      {/* Grid de Exibição Polimórfico (Mobile-First) */}
      <div className={styles.grid}>
        {filteredItems.map((item) => (
          <article key={item.id} className={styles.card}>
            
            <div className={styles.imageContainer}>
              <img src={item.image} alt={item.name} className={styles.image} />
            </div>

            <div className={styles.infoContainer}>
              <h3 className={styles.itemName}>{item.name}</h3>
              <p className={styles.itemDescription}>{item.description}</p>
              
              {/* Renderização condicional dos metadados flexíveis do JSON */}
              {item.meta && item.meta.label && (
                <span className={styles.metaBadge}>{item.meta.label}</span>
              )}

              <div className={styles.footerContainer}>
                <span className={styles.price}>
                  {item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </span>
                
                <button 
                  className={styles.actionBtn}
                  onClick={() => addToCart(item)}
                >
                  {tenantData.vocabulary.actionButton}
                </button>
              </div>
            </div>

          </article>
        ))}
      </div>

    </section>
  );
}
