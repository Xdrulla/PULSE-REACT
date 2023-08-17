import React, { useState, useEffect } from 'react';
import api from '../api/api';

const EstoqueTable = () => {
  const [estoques, setEstoques] = useState([]);
  const [editingProductId, setEditingProductId] = useState(null);
  const [updatedData, setUpdatedData] = useState({});

  useEffect(() => {
    fetchEstoques();
  }, []);

  const fetchEstoques = async () => {
    try {
      const response = await api.get('/products');
      setEstoques(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleEdit = (id) => {
    setEditingProductId(id);
    const estoque = estoques.find(item => item.id === id);
    setUpdatedData(estoque);
  };

  const handleUpdateDataChange = (fieldName, value) => {
    setUpdatedData(prevData => ({
      ...prevData,
      [fieldName]: value
    }));
  };

  const handleUpdate = async () => {
    try {
      await api.put(`/products/${editingProductId}`, updatedData);
      setEditingProductId(null);
      setUpdatedData({});
      fetchEstoques();
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const handleCancelEdit = () => {
    setEditingProductId(null);
    setUpdatedData({});
  };

  const handleDelete = async (id) => {
    if (window.confirm('Tem certeza que deseja excluir este item do estoque?')) {
      try {
        await api.delete(`/products/${id}`);
        fetchEstoques();
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    }
  };

  return (
    <div className="container site-content">
      <h2 className="flow-text">Itens em Estoque</h2>
      <table className="highlight centered responsive-table bordered">
        <thead>
          <tr>
            <th>Nome do Produto</th>
            <th>Código de Barras</th>
            <th>Tipo de Produto</th>
            <th>Estoque Total</th>
            <th>Estoque Disponível</th>
            <th>Valor de Varejo</th>
            <th>Valor de Atacado</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          {estoques.map(estoque => (
            <tr key={estoque.id}>
            <td>
              {editingProductId === estoque.id ? (
                <input
                  type='text'
                  value={updatedData.nome_produto || estoque.nome_produto}
                  onChange={(e) => handleUpdateDataChange('nome_produto', e.target.value)}
                />
              ) : (
                estoque.nome_produto
              )}
            </td>
            <td>
              {editingProductId === estoque.id ? (
                <input
                  type='text'
                  value={updatedData.codigo_barras || estoque.codigo_barras}
                  onChange={(e) => handleUpdateDataChange('codigo_barras', e.target.value)}
                />
              ) : (
                estoque.codigo_barras
              )}
            </td>
            <td>
              {editingProductId === estoque.id ? (
                <input
                  type='text'
                  value={updatedData.tipo_produto || estoque.tipo_produto}
                  onChange={(e) => handleUpdateDataChange('tipo_produto', e.target.value)}
                />
              ) : (
                estoque.tipo_produto
              )}
            </td>
            <td>
              {editingProductId === estoque.id ? (
                <input
                  type='text'
                  value={updatedData.estoque_total || estoque.estoque_total}
                  onChange={(e) => handleUpdateDataChange('estoque_total', e.target.value)}
                />
              ) : (
                estoque.estoque_total
              )}
            </td>
            <td>
              {editingProductId === estoque.id ? (
                <input
                  type='text'
                  value={updatedData.estoque_disponivel || estoque.estoque_disponivel}
                  onChange={(e) => handleUpdateDataChange('estoque_disponivel', e.target.value)}
                />
              ) : (
                estoque.estoque_disponivel
              )}
            </td>
            <td>
              {editingProductId === estoque.id ? (
                <input
                  type='text'
                  value={updatedData.valor_varejo || estoque.valor_varejo}
                  onChange={(e) => handleUpdateDataChange('valor_varejo', e.target.value)}
                />
              ) : (
                estoque.valor_varejo
              )}
            </td>
            <td>
              {editingProductId === estoque.id ? (
                <input
                  type='text'
                  value={updatedData.valor_atacado || estoque.valor_atacado}
                  onChange={(e) => handleUpdateDataChange('valor_atacado', e.target.value)}
                />
              ) : (
                estoque.valor_atacado
              )}
            </td>
              <td>
                {editingProductId === estoque.id ? (
                  <div>
                    <button className="btn" onClick={handleUpdate}>
                      Atualizar
                    </button>
                    <button className="btn" onClick={handleCancelEdit}>
                      Cancelar
                    </button>
                  </div>
                ) : (
                  <div>
                    <button className="btn" onClick={() => handleEdit(estoque.id)}>
                      Editar
                    </button>
                    <button className="btn delete" onClick={() => handleDelete(estoque.id)}>
                      Excluir
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EstoqueTable;





