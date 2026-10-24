import React, { useState } from 'react';
import { BookOpen, ArrowRight, X } from 'lucide-react';
import styles from './Blog.module.css';

export default function Blog() {
  // Estados para gerenciar o Modal dinâmico
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: "O Segredo do Pão Perfeito: Por que o Brioche faz toda a diferença?",
      excerpt: "Descubra como a escolha do pão artesanal assado diariamente transforma a textura, sustenta o molho e eleva o sabor do seu burger...",
      content: "Para criar o hambúrguer perfeito, a engenharia do pão é tão importante quanto a qualidade da carne. O pão Brioche artesanal destaca-se por sua receita rica em manteiga e ovos, proporcionando uma textura extremamente macia e levemente adocicada. Quando selado corretamente na chapa quente com manteiga, ele cria uma barreira impermeável protetora. Isso impede que os sucos da carne infiltrem no miolo, garantindo que o seu hambúrguer não desmanche até a última mordida.",
      image: "https://unsplash.com",
      tag: "Bastidores"
    },
    {
      id: 2,
      title: "Harmonização: Quais bebidas combinam com burgers de costela?",
      excerpt: "Do refrigerante artesanal de gengibre às notas encorpadas de uma cerveja IPA, listamos as melhores combinações para elevar a sua experiência...",
      content: "Hambúrgueres de costela possuem um sabor intenso, marcante e uma gordura natural riquíssima. Para equilibrar essa potência gastronômica, a escolha da bebida é crucial. Cervejas do estilo India Pale Ale (IPA) funcionam muito bem, pois o amargor do lúpulo corta a percepção da gordura e limpa as papilas gustativas. Se você prefere opções não alcoólicas, aposte em refrigerantes artesanais com toque cítrico (como limão ou gengibre) ou chás gelados infusionados com frutas vermelhas ácidas.",
      image: "https://unsplash.com",
      tag: "Dicas"
    }
  ];

  // Função para abrir o modal com o artigo correto
  const handleOpenPost = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  return (
    <section id="blog" className={styles.blogSection}>
      
      {/* Topo da Seção */}
      <div className={styles.headerBlock}>
        <div className={styles.titleArea}>
          <span className={styles.subtitle}>
            <BookOpen size={14} /> Burger News
          </span>
          <h2 className={styles.mainTitle}>Cultura Burger & Bastidores</h2>
        </div>
        {/* Agora o link 'Ver todos' abre o primeiro post como demonstração */}
        <button onClick={() => handleOpenPost(blogPosts[0])} className={styles.seeAllLink} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          Ver todos os artigos <ArrowRight size={16} />
        </button>
      </div>

      {/* Grid de Cards */}
      <div className={styles.grid}>
        {blogPosts.map((post) => (
          <article key={post.id} className={styles.blogCard}>
            <div className={styles.imageArea}>
              <img src={post.image} alt={post.title} className={styles.cardImage} />
              <span className={styles.tag}>{post.tag}</span>
            </div>
            
            <div className={styles.contentArea}>
              <div>
                <h3 className={styles.postTitle}>{post.title}</h3>
                <p className={styles.postExcerpt}>{post.excerpt}</p>
              </div>
              <button onClick={() => handleOpenPost(post)} className={styles.readMoreBtn}>
                Ler Artigo Completo <ArrowRight size={12} />
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* ==========================================
         RENDERIZAÇÃO CONDICIONAL DO MODAL (REACT)
         ========================================== */}
      {isModalOpen && selectedPost && (
        <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
          <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
            
            <button className={styles.closeBtn} onClick={() => setIsModalOpen(false)}>
              <X size={18} />
            </button>

            <div className={styles.modalContent}>
              <img src={selectedPost.image} alt={selectedPost.title} className={styles.modalImage} />
              <h3 className={styles.modalTitle}>{selectedPost.title}</h3>
              <p className={styles.modalBodyText}>{selectedPost.content}</p>

              {/* Conversão e Venda: Banner acoplado ao final da leitura */}
              <div className={styles.marketingBanner}>
                <div className={styles.bannerText}>
                  <h4>Deu fome durante a leitura?</h4>
                  <p>Peça nosso burger premium agora e aplique seu cashback acumulado.</p>
                </div>
                <a href="#cardapio" onClick={() => setIsModalOpen(false)}>
                  <button className={styles.bannerCta}>Ir para o Cardápio</button>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
