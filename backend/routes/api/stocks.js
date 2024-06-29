const express = require("express");
const router = express.Router();
const { searchStock, getStockGraphData } = require("../../utils/searchStock");
const { Stock } = require("../../db/models");

router.get("/", async (req, res, next) => {
  const allStocks = await Stock.findAll();

  return res.status(200).json({ data: allStocks, status: "success" });
});

router.get("/search/:symbol", async (req, res, next) => {
  const { symbol } = req.params;

  const currentStockWithSymbol = await Stock.findOne({
    where: {
      symbol: symbol.toUpperCase(),
    },
  });

  if (currentStockWithSymbol) {
    return res.status(404).json({
      status: "failure",
      message: "Stock with that symbol all ready exist",
    });
  }

  const stockData = await searchStock(symbol);

  if (!stockData) {
    return res.status(404).json({ status: "failure" });
  }

  const new_stock = await Stock.create(stockData);

  res.status(201).json({ data: new_stock, status: "success" });
});

router.get("/:stockId", async (req, res, next) => {
  const { stockId } = req.params;

  const stock = await Stock.findByPk(stockId);

  const graphData = await getStockGraphData(stock.symbol);

  res.status(200).json({ status: "success", data: { stock, graphData } });
});

module.exports = router;
