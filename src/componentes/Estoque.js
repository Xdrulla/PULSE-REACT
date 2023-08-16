import React, { useState, useEffect } from 'react';
import api from '../api/api';

const EstoqueTable = () => {
  const [estoques, setEstoques] = useState([]);

  useEffect(() => {
    api.get('/products')
      .then(response => {
        setEstoques(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

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
              <td>{estoque.nome_produto}</td>
              <td>{estoque.codigo_barras}</td>
              <td>{estoque.tipo_produto}</td>
              <td>{estoque.estoque_total}</td>
              <td>{estoque.estoque_disponivel}</td>
              <td>{estoque.valor_varejo}</td>
              <td>{estoque.valor_atacado}</td>
              <td>
                <a className="waves-effect waves-light btn" href={`/estoque/editar/${estoque.id}`}>
                  Editar Preços
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EstoqueTable;


