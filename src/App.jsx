import React, { useState } from 'react';
import { CartProvider } from './CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import MultiTenantMenu from './components/MultiTenantMenu';
import AdminPanel from './components/AdminPanel';
import Loyalty from './components/Loyalty';
import Blog from './components/Blog';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';

// BASE DE DADOS COMPLETA DO SAAS COM TODOS OS NOVOS SEGMENTOS
const initialDatabase = {
  hamburgueria: {
    name: "BurgerLab Artesanal",
    theme: { primaryColor: "#f59e0b", textOnPrimary: "#0a0a0a", bgMain: "#0a0a0a" },
    vocabulary: { categoryAll: "🍔 Todos os Burgers", actionButton: "Adicionar à Sacola" },
    categories: [{ id: 'todos', label: '🍔 Todos' }, { id: 'principais', label: 'Burgers' }],
    products: [{ id: 101, name: "Smash Classic Duplo", description: "Dois blends de carne de 80g, queijo cheddar derretido.", price: 24.90, category: "principais", image: "https://unsplash.com", meta: { label: "Blend: 160g" } }]
  },
  barbearia: {
    name: "Navalha Premium",
    theme: { primaryColor: "#3b82f6", textOnPrimary: "#ffffff", bgMain: "#0f172a" },
    vocabulary: { categoryAll: "💈 Todos os Serviços", actionButton: "Agendar Horário" },
    categories: [{ id: 'todos', label: '💈 Todos' }, { id: 'cabelo', label: 'Corte de Cabelo' }],
    products: [{ id: 201, name: "Corte Degradê Navalhado", description: "Corte moderno com acabamento na navalha.", price: 45.00, category: "cabelo", image: "https://unsplash.com", meta: { label: "Duração: 45 min" } }]
  },
  corrida: {
    name: "Elite Runners Assessoria",
    theme: { primaryColor: "#10b981", textOnPrimary: "#ffffff", bgMain: "#062016" },
    vocabulary: { categoryAll: "🏃 Planilhas Ativas", actionButton: "Contratar Assessoria" },
    categories: [{ id: 'todos', label: '🏃 Todos os Planos' }],
    products: [{ id: 301, name: "Planilha de Corrida - Meia Maratona (21k)", description: "Planilha de treinos estruturada e envio de feedbacks semanais via app.", price: 119.90, category: "todos", image: "https://unsplash.com", meta: { label: "Acompanhamento Online" } }]
  },
  surf: {
    name: "Ceará Surf School",
    theme: { primaryColor: "#06b6d4", textOnPrimary: "#0a0a0a", bgMain: "#081e26" },
    vocabulary: { categoryAll: "🏄 Aulas Disponíveis", actionButton: "Reservar Aula" },
    categories: [{ id: 'todos', label: '🏄 Agendar' }],
    products: [{ id: 401, name: "Aula de Surf Individual - Iniciante", description: "Incluso prancha e lycra de proteção. Professor dedicado.", price: 80.00, category: "todos", image: "https://unsplash.com", meta: { label: "Disponibilidade diária" } }]
  },
  forro: {
    name: "Forró do Chamego Oficial",
    theme: { primaryColor: "#ec4899", textOnPrimary: "#ffffff", bgMain: "#1e0b16" },
    vocabulary: { categoryAll: "🪗 Próximos Shows", actionButton: "Comprar Ingresso" },
    categories: [{ id: 'todos', label: '🪗 Festas' }],
    products: [{ id: 501, name: "Ingresso Frontstage - Pense Numa Lapada", description: "Acesso à área frontal do palco, banheiros exclusivos e bares dedicados.", price: 60.00, category: "todos", image: "https://unsplash.com", meta: { label: "Lote Promocional" } }]
  },
  turismo: {
    name: "Nordeste Beach Turismo",
    theme: { primaryColor: "#f43f5e", textOnPrimary: "#ffffff", bgMain: "#1f090c" },
    vocabulary: { categoryAll: "🏖️ Pacotes Promocionais", actionButton: "Garantir Vaga" },
    categories: [{ id: 'todos', label: '🏖️ Destinos' }],
    products: [{ id: 601, name: "Pacote 3 Praias em 1 Dia", description: "Tour completo por Morro Branco, Praia das Fontes e Canoa Quebrada com guia credenciado.", price: 95.00, category: "todos", image: "https://unsplash.com", meta: { label: "Saída de Fortaleza" } }]
  }
};

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  // Estado global que simula o banco de dados dinâmico do SaaS
  const [database, setDatabase] = useState(initialDatabase);

  return (
    <CartProvider>
      <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', position: 'relative' }}>
        
        <div onClick={() => setIsCartOpen(true)} style={{ cursor: 'pointer' }}>
          <Header />
        </div>
        
        <main>
          <Hero />
          
          {/* O painel de controle passa a gerenciar a base compartilhada */}
          <AdminPanel onUpdateDatabase={setDatabase} currentDatabase={database} />
          
          {/* A vitrine do cliente lê o estado modificado pelo admin */}
          <MultiTenantMenu database={database} /> 
          
          <Loyalty />
          <Blog />
        </main>
        
        <Footer />
        <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </CartProvider>
  );
}
