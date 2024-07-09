"use strict";

const { Stock } = require("../models");

module.exports = {
  async up(queryInterface, Sequelize) {
    await Stock.bulkCreate([
      {
        symbol: "ELIS",
        name: "Eli Testing Stock Name",
        price: "2",
        currency: "not USD",
        exchange: "nasdaq",
        country: "mexico",
        type: "fake",
        industry: "wheeling",
        ipo: new Date(),
        logo: "x",
        marketCap: "213",
        outstandingShares: "22",
      },
      {
        symbol: "ELIZ",
        name: "Eli dsa Stock Name",
        price: "2",
        currency: "dsa USD",
        exchange: "dsadsa",
        country: "mexico",
        type: "das",
        industry: "dsa",
        ipo: new Date(),
        logo: "ddd",
        marketCap: "231312",
        outstandingShares: "312312",
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
