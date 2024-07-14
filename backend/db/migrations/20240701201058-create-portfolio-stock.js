"use strict";

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "PortfolioStocks",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        portfolioId: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
            model: "Portfolios",
            key: "id",
          },
          onDelete: "CASCADE",
        },
        stockId: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
            model: "Stocks",
            key: "id",
          },
          onDelete: "CASCADE",
        },
        amount: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        createdAt: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        updatedAt: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
      },
      options
    );
  },
  async down(queryInterface, Sequelize) {
    options.tableName = "PortfolioStocks";
    await queryInterface.dropTable(options);
  },
};
