'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('estoques', {
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
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('estoques');
  },
};
