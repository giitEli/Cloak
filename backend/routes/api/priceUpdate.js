// require("dotenv").config();
// const { Stock } = require("../../db/models");

// const stocksPriceLookup = async () => {
//   const stocks = await Stock.findAll();

//   const symbols = stocks
//     .reduce((acc, { symbol }) => `${acc},${symbol}`, "")
//     .slice(1);

//     const urlStart = "https://api.twelvedata.com/";
//     const TWELVEDATA_API_KEY = process.env.TWELVEDATA_API_KEY;
//     const urlAPIKey = `?apikey=${TWELVEDATA_API_KEY}`;
//     const urlSymbol = `&symbol=${symbols}`;

//     const priceURL = urlStart + "price" + urlAPIKey + urlSymbol;
//     const rawPrices = await fetch(priceURL);
//     const responsePrices = await rawPrices.json();

//     console.log(responsePrices);
// };

// stocksPriceLookup();
