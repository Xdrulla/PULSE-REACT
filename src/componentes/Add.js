import React, { useState } from 'react';
// import BarcodeScanner from '../componentes/scannerBar';
import api from '../api/api';

const Add = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    nome_produto: '',
    codigo_barras: '',
    tipo_produto: '',
    estoque_total: '',
    estoque_disponivel: '',
    valor_varejo: '',
    valor_atacado: ''
  });

  // const handleBarcodeDetected = (barcode) => {
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     codigo_barras: barcode,
  //   }));
  // };

  function gerarCodigoBarras() {
    const codigoAleatorio = Math.floor(Math.random() * 1000000000000).toString();
    setFormData(prevData => ({
      ...prevData,
      codigo_barras: codigoAleatorio
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/products', formData);
      console.log('Product created:', response.data);
      onAdd(response.data);
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <main className='site-content'>
      <div className='card'>
        <div className='card-content'>
          <span className='card-title'><b>Cadastro de produtos</b></span>
          <div className='row'>
            <form className='col s12' onSubmit={handleSubmit}>
              <div className='row'>
                <div className='input-field col s12'>
                  <label htmlFor='nome_produto'>Nome do produto</label>
                  <input
                    id='nome_produto'
                    type='text'
                    name='nome_produto'
                    className='validate'
                    autoComplete='off'
                    value={formData.nome_produto}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className='row'>
                <div className='input-field col s12'>
                  <label htmlFor='codigo_barras'>Código de Barras</label>
                  {/* <BarcodeScanner onBarcodeDetected={handleBarcodeDetected} /> */}
                  <input
                    id='codigo_barras'
                    type='text'
                    name='codigo_barras'
                    className='validate'
                    autoComplete='off'
                    value={formData.codigo_barras}
                    onChange={handleInputChange}
                  />
                  <button
                    className='btn waves-effect waves-light custom-button'
                    type='button'
                    onClick={gerarCodigoBarras}
                  >
                    Gerar Código de Barras
                  </button>
                </div>
              </div>
              <div className='row'>
                <div className='input-field col s12'>
                  <label htmlFor='tipo_produto'>Tipo de produto</label>
                  <input
                    id='tipo_produto'
                    type='text'
                    name='tipo_produto'
                    className='validate'
                    autoComplete='off'
                    value={formData.tipo_produto}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className='row'>
                <div className='input-field col s12'>
                  <label htmlFor='estoque_total'>Estoque Total</label>
                  <input
                    id='estoque_total'
                    type='text'
                    name='estoque_total'
                    className='validate'
                    autoComplete='off'
                    value={formData.estoque_total}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className='row'>
                <div className='input-field col s12'>
                  <label htmlFor='estoque_disponivel'>Estoque Disponível</label>
                  <input
                    id='estoque_disponivel'
                    type='text'
                    name='estoque_disponivel'
                    className='validate'
                    autoComplete='off'
                    value={formData.estoque_disponivel}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className='row'>
                <div className='input-field col s12'>
                  <label htmlFor='valor_varejo'>Valor de varejo</label>
                  <input
                    id='valor_varejo'
                    type='text'
                    name='valor_varejo'
                    className='validate'
                    autoComplete='off'
                    value={formData.valor_varejo}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className='row'>
                <div className='input-field col s12'>
                  <label htmlFor='valor_atacado'>Valor de atacado</label>
                  <input
                    id='valor_atacado'
                    type='text'
                    name='valor_atacado'
                    className='validate'
                    autoComplete='off'
                    value={formData.valor_atacado}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div>
                <p><br /></p>
                <p><br /></p>
              </div>
              <button className='btn waves-effect waves-light custom-button' type='submit'>
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Add;




