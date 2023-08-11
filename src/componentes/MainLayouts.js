import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';
import Add from './Add'; // Importe o componente Add (ou qualquer outra página)
import LoginPage from './LoginPage'; // Importe o componente LoginPage
import CadastroPage from './CadastroPage';

const MainLayout = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={MainContent} />
                <Route path="/add" component={Add} />
                <Route path="/login" component={LoginPage} />
                <Route path='/cadastro' component={CadastroPage} />
                {/* Outras rotas aqui, por exemplo: */}
                {/* <Route path="/vendas" component={Vendas} /> */}
                {/* <Route path="/estoque" component={Estoque} /> */}
            </Switch>
            <Footer />
        </Router>
    );
};

export default MainLayout;




