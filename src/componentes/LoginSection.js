import React from 'react';

const LoginSection = () => {
    return (
        <div className="login-box">
            <form>
                <div className="user-box">
                    <input type="text" name="" required />
                    <label>Usuário</label>
                </div>
                <div className="user-box">
                    <input type="password" name="" required />
                    <label>Senha</label>
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
    );
};

export default LoginSection;
