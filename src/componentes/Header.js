import React from 'react';
import logo from '../img/Hannah.png';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const isLoginPage = location.pathname === '/login';
    const isCadastroPage = location.pathname === '/cadastro';

    return (
        <header>
            {(isLoginPage || isCadastroPage) ? null : (
                <nav className="mt-0 navbar" style={{ height: "52px" }}>
                    <div className="nav-wrapper">
                        <Link to="/"><img src={logo} alt="Logotipo" className="brand-logo center logo" /></Link>
                        <ul id="nav-mobile" className="left hide-on-med-and-down">
                            <li><Link to="/" className="white-text">Inicio</Link></li>
                            <li><Link to="/estoque" className="white-text">Estoque</Link></li>
                            <li><Link to="/add" className="white-text">Adicionar</Link></li>
                        </ul>
                        <ul className="right">
                            <li><Link to="/login" className="white-text">Login</Link></li>
                            <li><Link to="/cadastro" className="white-text">Cadastro</Link></li>
                        </ul>
                    </div>
                </nav>
            )}
        </header>
    );
};

export default Header;



