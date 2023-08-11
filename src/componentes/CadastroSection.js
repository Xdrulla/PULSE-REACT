import React from 'react';

const Cadastro = () => {
    return(
        <div className="login-box">
        <form>
          <div className="user-box">
            <input type="text" name="nome_cliente" required />
            <label for="nome_cliente">Nome Completo</label>
          </div>
          <div className="user-box">
            <input type="text" name="usuario" required />
            <label for="usuario">Usuário</label>
          </div>
          <div className="user-box">
              <input type="email" name="email" required />
              <label for="email">Email</label>
          </div>
          <div className="user-box">
              <input type="password" name="senha" required />
              <label for="senha">Senha</label>
          </div>
          <div className="user-box">
              <input type="password" name="confirme-senha" required />
              <label for="confirme-senha">Confirme a senha</label>
          </div>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Enviar
          </a>
        </form>
      </div>  
    )
}

export default Cadastro;