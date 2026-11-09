import React, { useState } from 'react';
import styles from './AdminPanel.module.css';

export default function AdminPanel({ onUpdateDatabase, currentDatabase }) {
  const [selectedTenant, setSelectedTenant] = useState('hamburgueria');
  
  // Estados para controlar os inputs de edição do primeiro produto do inquilino selecionado
  const currentProduct = currentDatabase[selectedTenant].products[0];
  
  const [editName, setEditName] = useState(currentProduct.name);
  const [editPrice, setEditPrice] = useState(currentProduct.price);
  const [editDesc, setEditDesc] = useState(currentProduct.description);

  // Sincroniza os inputs ao trocar de inquilino no painel admin
  const handleTenantChange = (tenantKey) => {
    setSelectedTenant(tenantKey);
    const firstProd = currentDatabase[tenantKey].products[0];
    setEditName(firstProd.name);
    setEditPrice(firstProd.price);
    setEditDesc(firstProd.description);
  };

  const handleSave = (e) => {
    e.preventDefault();
    
    // Clona o banco de dados atual para aplicar a alteração
    const updatedDb = { ...currentDatabase };
    updatedDb[selectedTenant].products[0] = {
      ...updatedDb[selectedTenant].products[0],
      name: editName,
      price: parseFloat(editPrice),
      description: editDesc
    };

    // Dispara a atualização para o componente pai salvar o novo estado global
    onUpdateDatabase(updatedDb);
    alert(`Dados do tenant [${selectedTenant}] atualizados com sucesso no SaaS!`);
  };

  return (
    <div className={styles.adminContainer}>
      <h2 className={styles.title}>⚙️ Painel de Controle SaaS Admin</h2>
      
      <p style={{ fontSize: '0.813rem', color: '#a3a3a3', textAlign: 'center', marginBottom: '1rem' }}>
        Selecione o Inquilino abaixo para customizar os itens no banco de dados JSON:
      </p>

      {/* Grid de seleção dos Inquilinos */}
      <div className={styles.tenantGrid}>
        <button className={`${styles.tenantBtn} ${selectedTenant === 'hamburgueria' ? styles.tenantBtnActive : ''}`} onClick={() => handleTenantChange('hamburgueria')}>🍔 Hamburgueria</button>
        <button className={`${styles.tenantBtn} ${selectedTenant === 'barbearia' ? styles.tenantBtnActive : ''}`} onClick={() => handleTenantChange('barbearia')}>💈 Barbearia</button>
        <button className={`${styles.tenantBtn} ${selectedTenant === 'corrida' ? styles.tenantBtnActive : ''}`} onClick={() => handleTenantChange('corrida')}>🏃 Assessoria de Corrida</button>
        <button className={`${styles.tenantBtn} ${selectedTenant === 'surf' ? styles.tenantBtnActive : ''}`} onClick={() => handleTenantChange('surf')}>🏄 Escola de Surf</button>
        <button className={`${styles.tenantBtn} ${selectedTenant === 'forro' ? styles.tenantBtnActive : ''}`} onClick={() => handleTenantChange('forro')}>🪗 Cantor de Forró</button>
        <button className={`${styles.tenantBtn} ${selectedTenant === 'turismo' ? styles.tenantBtnActive : ''}`} onClick={() => handleTenantChange('turismo')}>🏖️ Agência de Turismo</button>
      </div>

      {/* Formulário Dinâmico de Edição */}
      <form onSubmit={handleSave} className={styles.formSection}>
        <h3 className={styles.sectionSubtitle}>Editar Item em Destaque ({currentDatabase[selectedTenant].name})</h3>
        
        <div className={styles.formGroup}>
          <label className={styles.label}>Nome do Item / Serviço</label>
          <input type="text" className={styles.input} value={editName} onChange={(e) => setEditName(e.target.value)} required />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Preço / Mensalidade (R$)</label>
          <input type="number" step="0.01" className={styles.input} value={editPrice} onChange={(e) => setEditPrice(e.target.value)} required />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Descrição / Metadados do JSON</label>
          <textarea rows="3" className={styles.textarea} value={editDesc} onChange={(e) => setEditDesc(e.target.value)} required />
        </div>

        <button type="submit" className={styles.saveBtn}>Salvar Alterações no SaaS</button>
      </form>
    </div>
  );
}
