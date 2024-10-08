require("dotenv").config();

const finnHubLookup = async (symbol) => {
  const FINNHUB_API_KEY = process.env.FINNHUB_API_KEY;
  const urlStart = "https://finnhub.io/api/v1/stock/profile2?";
  const raw = await fetch(
    `${urlStart}symbol=${symbol}&token=${FINNHUB_API_KEY}`
  );

  const response = await raw.json();

  if (!response.name) {
    console.log(`\nError grabbing data on finnHub for symbol: ${symbol}\n`);
    console.log(response);
    return false;
  }

  return {
    industry: response.finnhubIndustry,
    ipo: response.ipo,
    marketCap: response.marketCap,
    logo: response.logo,
    marketCap: response.marketCapitalization,
    outstandingShares: response.shareOutstanding,
  };
};

const twelveDataLookup = async (symbol) => {
  const urlStart = "https://api.twelvedata.com/";
  const TWELVEDATA_API_KEY = process.env.TWELVEDATA_API_KEY;
  const urlAPIKey = `?apikey=${TWELVEDATA_API_KEY}`;
  const urlCountry = `&country=United States`;
  const urlSymbol = `&symbol=${symbol}`;
  const profileURL = urlStart + "stocks" + urlAPIKey + urlSymbol + urlCountry;

  const rawProfile = await fetch(profileURL);
  const responseProfile = await rawProfile.json();
  if (responseProfile.count === 0) {
    console.log(`\nError grabbing data on twelveData for symbol: ${symbol}\n`);
    console.log(responseProfile);
    return false;
  }

  const { name, currency, exchange, country, type } = responseProfile.data[0];

  const priceURL = urlStart + "price" + urlAPIKey + urlSymbol;
  const rawPrice = await fetch(priceURL);
  const responsePrice = await rawPrice.json();
  if (!responsePrice.price) {
    console.log(`\nError grabbing data on twelveData for symbol: ${symbol}\n`);
    console.log(responsePrice);
    return false;
  }

  const { price } = responsePrice;

  return {
    symbol: symbol.toUpperCase(),
    name,
    currency,
    exchange,
    country,
    type,
    price,
  };
};

const searchStock = async (symbol) => {
  const finnHubData = await finnHubLookup(symbol);
  const twelveDataData = await twelveDataLookup(symbol);

  if (!finnHubData || !twelveDataData) {
    console.log("Couldn't get stock data");
    return false;
  }

  return { ...finnHubData, ...twelveDataData };
};

const getStockGraphData = async (symbol) => {
  const urlStart = "https://api.twelvedata.com/";
  const TWELVEDATA_API_KEY = process.env.TWELVEDATA_API_KEY;
  const urlAPIKey = `?apikey=${TWELVEDATA_API_KEY}`;
  const urlSymbol = `&symbol=${symbol}`;
  const urlInterval = `&interval=1month`;
  const urlOutputSize = `&outputsize=50`;
  const seriesUrl =
    urlStart +
    "time_series" +
    urlAPIKey +
    urlSymbol +
    urlInterval +
    urlOutputSize;

  const raw = await fetch(seriesUrl);
  const response = await raw.json();

  if (!response.values) {
    return false;
  }

  const stockData = response.values.map((data) => {
    return {
      price: Number(data.close),
      date: data.datetime,
    };
  });

  return stockData;
};

module.exports = { searchStock, getStockGraphData };
