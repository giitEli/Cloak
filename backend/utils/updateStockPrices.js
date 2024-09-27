require("dotenv").config();
const { Stock } = require("../db/models");
const finnhub = require("finnhub");

const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = process.env.FINNHUB_API_KEY;

const finnhubClient = new finnhub.DefaultApi();
//stops from updating stocks multiple times simultaneously
let currentlyUpdating = false;

const updateStockPrices = async (req, res, next) => {
  //move on to other processes while stock prices update asynchronously
  next();

  //recursively call for updated stock price until response is received
  //or 120 seconds have passed to stop infinite loop if there is an error
  const updateStockPrice = async (stock, resolve, counter = 0) => {
    finnhubClient.quote(stock.symbol, (error, data, response) => {
      if (data === null) {
        if (counter > 120) {
          resolve();
        }
        setTimeout(() => updateStockPrice(stock, resolve, counter + 1), 1000);
      } else {
        stock.update({ price: Number(data.o).toFixed(2) });
        resolve();
      }
    });
  };

  //grab todays date and most recent update date
  const today = new Date();
  const stock = await Stock.findByPk(1);
  //see if stocks are currently being updated
  if (!currentlyUpdating) {
    //see if stocks have been updated today
    if (stock.updatedAt.toDateString() !== today.toDateString()) {
      //stop simultaneous updates
      currentlyUpdating = true;
      //get all stocks a loop through them calling the update function on all of them
      const stocks = await Stock.findAll();
      for (const stock of stocks) {
        //await to stop from sending out to many API calls at once
        await new Promise((resolve) => {
          updateStockPrice(stock, resolve);
        });
      }
      //allow stocks to get updated again
      currentlyUpdating = false;
    }
  }
};

module.exports = { updateStockPrices };
