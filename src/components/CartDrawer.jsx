import React from 'react';
import { X, Minus, Plus } from 'lucide-react';
import { useCart } from '../CartContext';
import styles from './CartDrawer.module.css';

export default function CartDrawer({ isOpen, onClose }) {
  const { cart, addToCart, removeFromCart, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.drawer} onClick={(e) => e.stopPropagation()}>
        
        <div className={styles.header}>
          <h3 className={styles.title}>Meu Pedido</h3>
          <button className={styles.closeBtn} onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className={styles.itemsList}>
          {cart.length === 0 ? (
            <p className={styles.emptyText}>Seu carrinho está vazio.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <img src={item.image} alt={item.name} className={styles.itemImage} />
                
                <div className={styles.itemDetails}>
                  <h4 className={styles.itemName}>{item.name}</h4>
                  <span className={styles.itemPrice}>
                    {(item.price * item.quantity).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                  </span>
                </div>

                <div className={styles.quantityControls}>
                  <button className={styles.controlBtn} onClick={() => removeFromCart(item.id)}>
                    <Minus size={12} />
                  </button>
                  <span className={styles.quantityNumber}>{item.quantity}</span>
                  <button className={styles.controlBtn} onClick={() => addToCart(item)}>
                    <Plus size={12} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className={styles.footer}>
            <div className={styles.totalRow}>
              <span className={styles.totalLabel}>Total:</span>
              <span className={styles.totalValue}>
                {totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </span>
            </div>
            <button className={styles.checkoutBtn}>Finalizar Pedido</button>
          </div>
        )}

      </div>
    </div>
  );
}
