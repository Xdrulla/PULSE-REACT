const Sequelize = require('sequelize');
const db = require('../db/connection');

const Estoque = db.define('estoques', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome_produto: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    codigo_barras: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    tipo_produto: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    estoque_total: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    estoque_disponivel: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    valor_varejo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    valor_atacado: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = Estoque;
