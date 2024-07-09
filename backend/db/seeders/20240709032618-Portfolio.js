"use strict";

const { Portfolio } = require("../models");

module.exports = {
  async up(queryInterface, Sequelize) {
    await Portfolio.bulkCreate([
      {
        userId: 1,
        name: "Eli's wonderful testing portfolio",
        balance: 24,
      },
      {
        userId: 1,
        name: "portfolio 2",
        balance: 321132,
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
