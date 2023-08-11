import React from 'react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();
    const isLoginPage = location.pathname === '/login';
    const isCadastroPage = location.pathname === '/cadastro';

    return (
        <footer className={(isLoginPage || isCadastroPage) ? "" : "page-footer"}>
            {(isLoginPage || isCadastroPage) ? null : (
                <div className="container">
                    <div className="row">
                        <div className="col s12 m6">
                            <h5>Contato</h5>
                            <p>Email: luandrulla@gmail.com</p>
                            <p>Telefone:<br />(41) 99800-7752</p>
                        </div>
                        <div className="col s12 m6">
                            <h5>Redes Sociais</h5>
                            <ul className="social-icons">
                                <li><a href="https://www.facebook.com/Luan.Drulla/"><i className="fab fa-facebook"></i>Facebook</a></li>
                                <li><a href="https://twitter.com/LuanDrulla"><i className="fab fa-twitter"></i>Twitter</a></li>
                                <li><a href="https://www.instagram.com/luandrulla/"><i className="fab fa-instagram"></i>Instagram</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
            {(isLoginPage || isCadastroPage) ? null : (
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col s12">
                                <p>&copy; 2023 SAC | DRU. Todos os direitos reservados.</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </footer>
    );
};

export default Footer;



