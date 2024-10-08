const express = require("express");
const router = express.Router();
const {
  Portfolio,
  PortfolioStock,
  Stock,
  Transaction,
} = require("../../db/models");
const { requireAuth } = require("../../utils/auth");

//get all user portfolio data
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

//create a portfolio for user
router.post("", requireAuth, async (req, res, next) => {
  const userId = req.user.id;
  const { name, balance } = req.body;

  const newPortfolio = await Portfolio.create({
    name,
    userId,
    balance,
  });

  newPortfolio.stocks = [];

  return res.status(201).json({ status: "success", data: newPortfolio });
});

//edit a portfolio name
//deposit into a portfolio balance
//withdraw from a portfolio balance
router.put("/:portfolioId", requireAuth, async (req, res, next) => {
  const userId = req.user.id;
  const { portfolioId } = req.params;
  const { name, balance } = req.body;

  const portfolio = await Portfolio.findByPk(portfolioId);

  const editObj = {};
  if (name) {
    editObj.name = name;
  } else if (balance) {
    editObj.balance = (Number(balance) + Number(portfolio.balance)).toFixed(2);
    if (Number(balance) > 0) {
      await Transaction.create({
        userId,
        type: "Deposit",
        portfolio: portfolio.name,
        total: Number(balance).toFixed(2),
      });
    } else if (Number(balance) < 0) {
      await Transaction.create({
        userId,
        type: "Withdraw",
        portfolio: portfolio.name,
        total: Math.abs(Number(balance)).toFixed(2),
      });
    }
  }

  const updatedPortfolio = await portfolio.update(editObj);
  res.status(200).json({ status: "success", data: updatedPortfolio });
});

//delete a portfolio
router.delete("/:portfolioId", requireAuth, async (req, res, next) => {
  const { portfolioId } = req.params;
  const portfolio = await Portfolio.findByPk(portfolioId);

  await portfolio.destroy();

  return res.status(200).json({ status: "success", data: portfolio });
});

//sell a stock
router.put("/:portfolioId/sell", requireAuth, async (req, res, next) => {
  const { portfolioId } = req.params;
  const { stockId, amount } = req.body;
  const userId = req.user.id;
  const stock = await Stock.findByPk(stockId);
  const portfolio = await Portfolio.findByPk(portfolioId);

  const newTotal = (
    Number(stock.price) * Number(amount) +
    Number(portfolio.balance)
  ).toFixed(2);

  const updatePortfolio = await portfolio.update({
    balance: newTotal,
  });

  const portfolioStock = await PortfolioStock.findOne({
    where: {
      portfolioId,
      stockId,
    },
  });

  const newAmount = (portfolioStock.amount - amount).toFixed(4);

  if (newAmount <= 0) {
    await portfolioStock.destroy();
  } else {
    await portfolioStock.update({ amount: newAmount });
  }

  await Transaction.create({
    type: "Sell",
    userId,
    portfolio: portfolio.name,
    symbol: stock.symbol,
    amount: Number(amount).toFixed(4),
    total: (Number(amount) * Number(stock.price)).toFixed(2),
  });

  return res.status(200).json({
    status: "success",
    data: {
      newBalance: newTotal,
      newAmount,
      portfolioId,
      stockId,
    },
  });
});

module.exports = router;
