import React, { useState } from 'react';
import styles from './Menu.module.css';
import { useCart } from '../CartContext';

export default function Menu() {
  // CORREÇÃO 1: O hook useCart deve ficar EXATAMENTE AQUI, dentro da função principal
  const { addToCart } = useCart();

  // Estado para controlar a categoria selecionada (Filtro)
  const [activeCategory, setActiveCategory] = useState('todos');

  const categories = [
    { id: 'todos', label: '🍔 Todos' },
    { id: 'burgers', label: 'Burgers' },
    { id: 'combos', label: 'Combos Promocionais' },
    { id: 'acompanhamentos', label: 'Porções' },
    { id: 'bebidas', label: 'Bebidas' }
  ];

  // Dados simulados do Banco de Dados (Exemplo de dados do SaaS)
  const products = [
    {
      id: 1,
      name: "Smash Burger Classic",
      description: "Dois blends de carne de 80g prensados na chapa, queijo cheddar derretido, maionese artesanal da casa e pão brioche macio.",
      price: 24.90,
      category: "burgers",
      image: "https://unsplash.com"
    },
    {
      id: 2,
      name: "Combo Burger Lab",
      description: "Nosso incrível Burger Lab Duplo (150g), acompanhado de batata frita rústica crocante com páprica e refrigerante em lata.",
      price: 42.00,
      category: "combos",
      image: "https://unsplash.com"
    },
    {
      id: 3,
      name: "Batata Frita com Cheddar e Bacon",
      description: "Porção generosa de batatas fritas palito super crocantes, cobertas com molho cremoso de cheddar e salpicadas com bacon crocante.",
      price: 18.90,
      category: "acompanhamentos",
      image: "https://unsplash.com"
    },
    {
      id: 4,
      name: "Burger Lab Duplo Bacon",
      description: "Duas carnes artesanais de 150g, muito bacon texturizado, queijo prato fatiado, cebola caramelizada e molho barbecue.",
      price: 34.90,
      category: "burgers",
      image: "https://unsplash.com"
    },
    {
      id: 5,
      name: "Refrigerante Lata Artesanal",
      description: "Refrigerante natural da casa sabor frutas vermelhas com infusão de hibisco e água gaseificada.",
      price: 7.00,
      category: "bebidas",
      image: "https://unsplash.com"
    }
  ];

  // Regra de filtragem baseada no Estado do React
  const filteredProducts = activeCategory === 'todos' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section id="cardapio" className={styles.menuSection}>
      
      {/* Menu de Categorias (Molécula) */}
      <div className={styles.categoriesNav}>
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`${styles.categoryBtn} ${activeCategory === cat.id ? styles.categoryBtnActive : styles.categoryBtnHover}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid de Exibição dos Produtos (Organismo) */}
      <div className={styles.grid}>
        {filteredProducts.map((product) => (
          <article key={product.id} className={styles.productCard}>
            
            <div className={styles.imageContainer}>
              <img src={product.image} alt={product.name} className={styles.productImage} />
            </div>

            <div className={styles.infoContainer}>
              <h3 className={styles.productName}>{product.name}</h3>
              <p className={styles.productDescription}>{product.description}</p>
              
              <div className={styles.footerContainer}>
                <span className={styles.price}>
                  {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </span>

                {/* CORREÇÃO 2: Apenas um botão, mapeado com a função onClick correta */}
                <button 
                  className={styles.addBtn} 
                  onClick={() => addToCart(product)} 
                  title="Adicionar ao carrinho"
                >
                  +
                </button>
              </div>
            </div>

          </article>
        ))}
      </div>

    </section>
  );
}
