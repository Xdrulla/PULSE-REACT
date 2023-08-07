// MainContent.js
import React from 'react';
import Sobre from '../img/foto.webp'
import Estoque from '../img/estoque.jpg'
import Vendas from '../img/vendas.png'

const MainContent = () => {
  return (
    <main>
      <main className="site-content">
        <div className="row">
          <div className="col s12 m6 offset-m5">
            <div className="card horizontal">
              <div className="card-image">
                <img className="responsive-img" src={Sobre} alt="logotipo" style={{ height: "245px" }} />
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <span className="card-title"><b>Sobre</b></span>
                  <p>Nossa plataforma foi desenvolvida para facilitar e otimizar a gestão do seu negócio, fornecendo ferramentas poderosas para acompanhar o seu estoque, registrar e monitorar vendas, e manter informações precisas sobre o desempenho do seu negócio.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m6">
            <div className="card horizontal">
              <div className="card-stacked">
                <div className="card-content">
                  <span className="card-title"><b>Controle de Estoque</b></span>
                  <p>O controle de estoque do nosso site é uma função vital para garantir a disponibilidade dos produtos que oferecemos aos nossos clientes. Trabalhamos constantemente para manter um estoque bem abastecido e atender às demandas do mercado de forma eficiente.</p>
                </div>
              </div>
              <div className="card-image">
                <img className="responsive-img" src={Estoque} style={{ height: "275px" }} alt='Estoque'/>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m6 offset-m5">
            <div className="card horizontal">
              <div className="card-image">
                <img className="responsive-img" src={Vendas} alt="logotipo" style={{ height: "245px" }} />
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <span className="card-title"><b>Vendas</b></span>
                  <p>Maximize suas vendas com nosso site! Com nossa poderosa funcionalidade de vendas, você terá todas as ferramentas necessárias para impulsionar seu negócio ao próximo nível. Nosso sistema inteligente de código de barras permite registrar e monitorar suas vendas de forma eficiente e precisa.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </main>
  );
};

export default MainContent;
