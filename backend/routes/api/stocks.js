const express = require("express");
const router = express.Router();
const { searchStock, getStockGraphData } = require("../../utils/searchStock");
const { Stock } = require("../../db/models");

router.get("/", async (req, res, next) => {
  const { page } = req.query;
  const allStocks = await Stock.findAll();

  // const allStocks = await Stock.findAll({
  //   limit: 31,
  //   offset: 30 * (Number(page) - 1),
  // });

  return res.status(200).json({ data: allStocks, status: "success" });
});

router.post("/", async (req, res, next) => {
  const { symbol } = req.body;

  const currentStockWithSymbol = await Stock.findOne({
    where: {
      symbol: symbol.toUpperCase(),
    },
  });

  if (currentStockWithSymbol) {
    return res.status(400).json({
      status: "failure",
      message: "Stock with that symbol all ready exist",
    });
  }

  const stockData = await searchStock(symbol);

  if (!stockData) {
    return res.status(404).json({
      status: "failure",
      message: "Stock with that symbol could not be found",
    });
  }

  const newStock = await Stock.create(stockData);

  res.status(201).json({ data: newStock, status: "success" });
});

//get specific stock data
router.get("/:stockId", async (req, res, next) => {
  const { stockId } = req.params;

  const stock = await Stock.findByPk(stockId);

  const graphData = await getStockGraphData(stock.symbol);

  res.status(200).json({ status: "success", data: { stock, graphData } });
});

module.exports = router;
