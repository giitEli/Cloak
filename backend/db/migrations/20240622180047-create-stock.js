"use strict";

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "Stocks",
      {
        id: {
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        symbol: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        price: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        currency: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        exchange: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        country: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        type: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        industry: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        ipo: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        logo: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        marketCap: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        outstandingShares: {
          type: Sequelize.STRING,
          allowNull: false,
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
    await queryInterface.dropTable("Stocks");
  },
};
