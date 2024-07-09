const express = require("express");
const router = express.Router();
const { Portfolio, PortfolioStock, Stock } = require("../../db/models");
const { requireAuth } = require("../../utils/auth");

router.get("/", requireAuth, async (req, res, next) => {
  const userId = req.user.id;

  //create return object
  const portfolioData = {};

  //grab portfolios and add data to return object
  const portfolios = await Portfolio.findAll({
    where: {
      userId,
    },
  });
  for (const portfolio of portfolios) {
    portfolioData[portfolio.id] = JSON.parse(JSON.stringify(portfolio));
    portfolioData[portfolio.id].stocks = [];
  }

  //grab portfolio stock data
  const portfolioIds = portfolios.map(({ id }) => id);
  const portfolioStocks = await PortfolioStock.findAll({
    where: {
      portfolioId: portfolioIds,
    },
  });

  //grab stock data and flatten it
  const portfolioStockIds = portfolioStocks.map(({ stockId }) => stockId);
  const stocks = await Stock.findAll({
    where: {
      id: portfolioStockIds,
    },
  });
  const stocksData = stocks.reduce((acc, stock) => {
    acc[stock.id] = stock;
    return acc;
  }, {});

  //loop through portfolio stock data
  for (const portfolioStock of portfolioStocks) {
    //get stock data and add amount to it
    const stockData = JSON.parse(
      JSON.stringify(stocksData[portfolioStock.stockId])
    );
    stockData.amount = portfolioStock.amount;

    //add stock data with amount to portfolio stocks object
    portfolioData[portfolioStock.portfolioId].stocks.push(stockData);
  }

  return res.status(200).json({ status: "success", data: portfolioData });
});

router.get("/:portfolioId", requireAuth, async (req, res, next) => {
  const userId = req.user.id;
  const { portfolioId } = req.params;
  const portfolio = await Portfolio.findOne({
    where: {
      userId,
    },
  });
  const stocks = await portfolio.getStocks();

  console.log(stocks);
});

router.post("", requireAuth, async (req, res, next) => {
  const userId = req.user.id;
  const { name, balance } = req.body;

  const newPortfolio = await Portfolio.create({
    name,
    userId,
    balance,
  });

  res.status(201).json({ status: "success", data: newPortfolio });
});

module.exports = router;
