const express = require("express");
const router = express.Router();
const searchStock = require("../../utils/searchStock");
const { Stock } = require("../../db/models");
require("dotenv").config();
const API_KEY = process.env.API_KEY;

const url_start = "https://api.twelvedata.com/";
const url_country = `&country=United States`;
const url_api = `?apikey=${API_KEY}`;

router.get("/", async (req, res, next) => {
  const allStocks = await Stock.findAll();

  res.status(200).json({ data: allStocks, status: "success" });
});

router.get("/:symbol", async (req, res, next) => {
  const { symbol } = req.params;

  const stockData = await searchStock(symbol);

  if (!stockData) {
    res.status(404).json({ status: "failure" });
  }

  const new_stock = await Stock.create(stockData);

  res.status(201).json({ data: new_stock, status: "success" });
});

module.exports = router;
