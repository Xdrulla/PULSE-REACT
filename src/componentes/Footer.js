// Footer.js
import React from 'react';

const Footer = () => {
  return (
<footer className="page-footer">
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
  <div className="footer-bottom">
    <div className="container">
      <div className="row">
        <div className="col s12">
          <p>&copy; 2023 SAC | DRU. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  </div>
</footer>
  );
};

export default Footer;
