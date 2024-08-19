//round price to nearest cent
const roundPrice = (stockPrice, amount) => {
  return String((Number(stockPrice) * Number(amount)).toFixed(2));
};

//round stock to nearest thousandth of a stock
const roundAmount = (stockPrice, price) => {
  return String((Number(price) / Number(stockPrice)).toFixed(4));
};

module.exports = { roundPrice, roundAmount };
