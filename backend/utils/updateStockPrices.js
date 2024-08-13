require("dotenv").config();
const { Stock } = require("../db/models");
const finnhub = require("finnhub");

const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = process.env.FINNHUB_API_KEY;
const finnhubClient = new finnhub.DefaultApi();

let currentlyUpdating = false;

const updateStockPrice = async (stock, resolve) => {
  finnhubClient.quote(stock.symbol, (error, data, response) => {
    console.log(stock.symbol, data.o);
    if (data === null) {
      setTimeout(() => updateStockPrice(stock, resolve), 1000);
    } else {
      stock.update({ price: data.o });
      resolve();
    }
  });
};

const updateStockPrices = async (req, res, next) => {
  next();

  const today = new Date();

  const stock = await Stock.findByPk(1);

  if (stock.updatedAt.toDateString() !== today.toDateString()) {
    if (!currentlyUpdating) {
      currentlyUpdating = true;
      const stocks = await Stock.findAll();
      for (const stock of stocks) {
        await new Promise((resolve) => {
          updateStockPrice(stock, resolve);
        });
      }
      currentlyUpdating = false;
    } else {
      console.log("\ncurrently updating...\n");
    }
  }
};

module.exports = { updateStockPrices };
