const express = require("express");
const router = express.Router();
const {
  Order,
  Stock,
  Portfolio,
  PortfolioStock,
  Transaction,
} = require("../../db/models");
const { requireAuth } = require("../../utils/auth");

//get users orders
router.get("", requireAuth, async (req, res, next) => {
  //grab user id to get users orders
  const userId = req.user.id;

  //get all of users current orders
  const orders = await Order.findAll({
    where: {
      userId,
    },
  });

  //get an array of orders stock ids
  const stockIds = orders.map(({ stockId }) => stockId);

  //grab all stocks related to orders
  const stocks = await Stock.findAll({ where: { id: stockIds } });
  //flatten stock data
  const stockData = stocks.reduce((acc, stock) => {
    acc[stock.id] = stock;
    return acc;
  }, {});
  //declare return variable
  const orderData = {};

  for (const order of orders) {
    orderData[order.stockId] = JSON.parse(
      JSON.stringify(stockData[order.stockId])
    );
    orderData[order.stockId].amount = order.amount;
  }

  return res.status(200).json({ status: "success", data: orderData });
});

// add to order
router.put("/add", requireAuth, async (req, res, next) => {
  //grab data from req
  const userId = req.user.id;
  const { stockId, amount } = req.body;

  //see if user already has an order for that stock
  const currentStockOrder = await Order.findOne({
    where: {
      userId,
      stockId,
    },
  });

  const stock = await Stock.findByPk(stockId);
  const updatedOrderData = JSON.parse(JSON.stringify(stock));

  //if user has order update amount
  if (currentStockOrder) {
    const newAmount = (
      Number(currentStockOrder.amount) + Number(amount)
    ).toFixed(4);
    const updatedOrder = await currentStockOrder.update({
      amount: newAmount,
    });
    updatedOrderData.amount = newAmount;
    //if user doesn't have order for stock, create new order
  } else {
    const newOrder = await Order.create({
      userId,
      stockId,
      amount: Number(amount).toFixed(4),
    });
    updatedOrderData.amount = Number(amount).toFixed(4);
  }

  res.status(201).json({ status: "success", data: updatedOrderData });
});

//remove order
router.put("/remove", requireAuth, async (req, res, next) => {
  //grab data from req
  const userId = req.user.id;
  const { stockId } = req.body;

  //get users stock order
  const currentStockOrder = await Order.findOne({
    where: {
      userId,
      stockId,
    },
  });

  //nuke it from orbit
  await currentStockOrder.destroy();

  res.status(200).json({ status: "success", data: currentStockOrder });
});

//edit order
router.put("", requireAuth, async (req, res, next) => {
  //grab data from req
  const userId = req.user.id;
  const { stockId, amount } = req.body;

  //grab order
  const order = await Order.findOne({
    where: {
      userId,
      stockId,
    },
  });

  //update order
  const updatedOrder = await order.update({
    amount: Number(amount.toFixed(4)),
  });

  //return updated order
  res.status(200).json({ status: "success", data: updatedOrder });
});

//clear orders
router.delete("", requireAuth, async (req, res, next) => {
  const userId = req.user.id;

  await Order.destroy({
    where: {
      userId,
    },
  });

  res.status(200).json({ status: "success" });
});

//checkout
router.get("/:portfolioId", requireAuth, async (req, res, next) => {
  const userId = req.user.id;
  const { portfolioId } = req.params;

  //grab orders and stock data
  const orders = await Order.findAll({
    where: {
      userId,
    },
  });

  const stockIds = orders.map(({ stockId }) => stockId);
  const stocks = await Stock.findAll({
    where: {
      id: stockIds,
    },
  });

  const stockData = stocks.reduce((acc, stock) => {
    acc[stock.id] = stock;
    return acc;
  }, {});

  //update portfolio balance
  const total = orders.reduce((acc, { stockId, amount }) => {
    acc += Number(stockData[stockId].price) * Number(amount);
    return acc;
  }, 0);

  const portfolio = await Portfolio.findByPk(portfolioId);
  await portfolio.update({
    balance: (Number(portfolio.balance) - total).toFixed(2),
  });

  //add stocks to portfolio
  const currentPortfolioStocksArr = await PortfolioStock.findAll({
    where: {
      stockId: stockIds,
      portfolioId,
    },
  });

  const currentPortfolioStocks = currentPortfolioStocksArr.reduce(
    (acc, portfolioStock) => {
      acc[portfolioStock.stockId] = portfolioStock;
      return acc;
    },
    {}
  );

  for (const { stockId, amount } of orders) {
    if (currentPortfolioStocks[stockId]) {
      await currentPortfolioStocks[stockId].update({
        amount: (
          Number(currentPortfolioStocks[stockId].amount) + Number(amount)
        ).toFixed(4),
      });
    } else {
      await PortfolioStock.create({
        portfolioId,
        stockId: stockId,
        amount: Number(amount).toFixed(4),
      });
    }
  }

  //create transactions
  const transactions = orders.map(({ stockId, amount }) => {
    const stock = stockData[stockId];
    return {
      userId,
      type: "Buy",
      portfolio: portfolio.name,
      symbol: stock.symbol,
      amount: Number(amount).toFixed(4),
      price: stock.price,
      total: (Number(stock.price) * Number(amount)).toFixed(2),
    };
  });

  await Transaction.bulkCreate(transactions);

  //delete order
  await Order.destroy({
    where: {
      userId,
    },
  });

  res.status(200).json({ status: "success" });
});

module.exports = router;
