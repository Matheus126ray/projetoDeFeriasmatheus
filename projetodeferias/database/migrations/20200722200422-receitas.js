"use strict";

module.exports = {
  up: async (sequelize, DataTypes) => {
    return sequelize.createTable("receitas", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nome: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      descricao: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      ingredientes: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      mododepreparo: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      redimento: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable("receitas");
  },
};
