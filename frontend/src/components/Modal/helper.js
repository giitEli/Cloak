export const roundPrice = (stockPrice, amount) => {
  return String((Number(stockPrice) * Number(amount)).toFixed(2));
};

export const roundAmount = (stockPrice, price) => {
  return String((Number(price) / Number(stockPrice)).toFixed(4));
};

export const amountFunc = (currentAmount, targetAmount) => {
  //target can be empty string
  if (targetAmount === "") {
    return "";
  }
  //target can be a single period
  if (targetAmount === ".") {
    return ".";
  }
  //if target not a number return current
  if (isNaN(targetAmount)) {
    return currentAmount;
  }
  //if target amount is less then 0 return current
  if (Number(targetAmount) < 0) {
    return String(Math.abs(Number(targetAmount)));
  }
  //if target has more then 4 digits, return current
  if (
    targetAmount.split(".").length > 1 &&
    targetAmount.split(".")[1].length > 4
  ) {
    return currentAmount;
  }
  return targetAmount;
};

export const priceFunc = (currentPrice, targetPrice) => {
  //target can be empty string
  if (targetPrice === "") {
    return "";
  }
  //target can be a single period
  if (targetPrice === ".") {
    return ".";
  }
  //if target not a number return current
  if (isNaN(targetPrice)) {
    return currentPrice;
  }
  //if target amount is less then 0 return current
  if (Number(targetPrice) < 0) {
    return currentPrice;
  }
  //if target has more then 2 digits, return current
  if (
    targetPrice.split(".").length > 1 &&
    targetPrice.split(".")[1].length > 2
  ) {
    return currentPrice;
  }
  return targetPrice;
};
