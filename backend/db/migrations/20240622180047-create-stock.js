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
        },
        symbol: {
          type: Sequelize.STRING,
        },
        name: {
          type: Sequelize.STRING,
        },
        current_price: {
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

        // General Stock Data

        // exchange: {
        //   allowNull: false,
        //   type: Sequelize.STRING,
        // },
        // sector: {
        //   allowNull: false,
        //   type: Sequelize.STRING,
        // },
        // industry: {
        //   allowNull: false,
        //   type: Sequelize.STRING,
        // },
        // employees: {
        //   allowNull: false,
        //   type: Sequelize.NUMBER,
        // },
        // ceo: {
        //   allowNull: false,
        //   type: Sequelize.STRING,
        // },
        // description: {
        //   allowNull: false,
        //   type: Sequelize.STRING,
        // },
        country: {
          type: Sequelize.STRING,
        },
      },
      options
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Stocks");
  },
};
