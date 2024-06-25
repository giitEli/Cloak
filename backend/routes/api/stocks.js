const express = require("express");
const router = express.Router();
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
  const url_symbol = `&symbol=${symbol}`;
  const profile_url = url_start + "stocks" + url_api + url_symbol + url_country;

  const raw_profile = await fetch(profile_url);
  const response = await raw_profile.json();
  const { name, country } = response.data[0];

  const price_url = url_start + "price" + url_api + url_symbol;
  const raw_price = await fetch(price_url);
  const response_price = await raw_price.json();
  const current_price = response_price.price;

  const new_stock = await Stock.create({
    symbol,
    name,
    current_price: Number(current_price),
    country,
  });

  res.status(201).json({ data: new_stock, status: "success" });
});

module.exports = router;
