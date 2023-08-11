import React from 'react';
import logo from '../img/Hannah.png';

const LoginHeader = () => {
    return (
        <header>
            <nav className="mt-0 navbar" style={{ height: "52px" }}>
                <div className="nav-wrapper">
                    <a href="/"><img src={logo} alt="Logotipo" className="brand-logo center logo" /></a>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><a href="/" className="white-text">Inicio</a></li>
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

export default LoginHeader;