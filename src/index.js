import React from 'react';
import ReactDOM from 'react-dom';
import MainLayout from './componentes/MainLayouts';
import './styles/styles.scss';
import 'materialize-css/dist/css/materialize.min.css';

ReactDOM.render(
    <React.StrictMode>
        <MainLayout />
    </React.StrictMode>,
    document.getElementById('root')
);