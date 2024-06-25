const { writeFileSync } = require("fs");
const container = async () => {
  const raw = await fetch(
    "https://finnhub.io/api/v1/stock/symbol?exchange=US&token=cpp4nfpr01qn2da29gs0cpp4nfpr01qn2da29gsg"
  );
  const json = await raw.json();

  const symbols = json.reduce((acc, ele) => {
    acc[ele.symbol] = ele.description;
    return acc;
  }, {});

  writeFileSync("./supportedStockSymbols", JSON.stringify(symbols));
};
container();
