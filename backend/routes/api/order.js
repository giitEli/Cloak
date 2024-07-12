const express = require("express");
const router = express.Router();
const { Order, Stock } = require("../../db/models");
const { requireAuth } = require("../../utils/auth");

router.get("", requireAuth, async (req, res, next) => {
  //grab user id to get users ordedrs
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
    const newAmount = Number(currentStockOrder.amount) + Number(amount);
    const updatedOrder = await currentStockOrder.update({
      amount: newAmount,
    });
    updatedOrderData.amount = newAmount;
    //if user doesn't have order for stock, create new order
  } else {
    const newOrder = await Order.create({
      userId,
      stockId,
      amount,
    });
    updatedOrderData.amount = amount;
  }

  res.status(201).json({ status: "success", data: updatedOrderData });
});

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

module.exports = router;
