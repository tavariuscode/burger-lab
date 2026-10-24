import React, { useState } from 'react';
import { CartProvider } from './CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Loyalty from './components/Loyalty';
import Blog from './components/Blog';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', position: 'relative' }}>
        
        {/* Passamos o gatilho para abrir o carrinho via clique no cabeçalho */}
        <div onClick={() => setIsCartOpen(true)} style={{ cursor: 'pointer' }}>
          <Header />
        </div>
        
        <main>
          <Hero />
          <Menu />
          <Loyalty />
          <Blog />
        </main>
        
        <Footer />

        {/* Drawer controlado pelo estado local do layout principal */}
        <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </CartProvider>
  );
}
