require("dotenv").config();
const { Stock } = require("../db/models");

const getAllStockData = async () => {
  const allStockData = await Stock.findAll();
  const formattedStockData = allStockData.map((stockData) =>
    JSON.parse(JSON.stringify(stockData))
  );
  console.log(formattedStockData.slice(30));
};

getAllStockData();
