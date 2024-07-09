"use strict";

const { PortfolioStock } = require("../models");

module.exports = {
  async up(queryInterface, Sequelize) {
    await PortfolioStock.bulkCreate([
      {
        portfolioId: 1,
        stockId: 1,
        amount: 2,
      },
      {
        portfolioId: 1,
        stockId: 2,
        amount: 24,
      },
      {
        portfolioId: 2,
        stockId: 1,
        amount: 242,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
