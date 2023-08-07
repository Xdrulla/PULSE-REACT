// Header.js
import React from 'react';
import logo from '../img/Hannah.png';

const Header = () => {
  return (
    <header>
      <nav className="mt-0 navbar" style={{ height: "52px" }}>
        <div className="nav-wrapper">
          <a href="/"><img src={logo} alt="Logotipo" className="brand-logo center logo" /></a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li><a href="/" className="white-text">Inicio</a></li>
            <li><a href="/vendas" className="white-text">Vendas</a></li>
            <li><a href="/estoque" className="white-text">Estoque</a></li>
            <li><a href="/adicionar" className="white-text">Adicionar</a></li>
          </ul>
          <ul className="right">
            <li><a href="/login" className="white-text">Login</a></li>
            <li><a href="/cadastro" className="white-text">Cadastro</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
