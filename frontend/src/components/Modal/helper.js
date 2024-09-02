export const roundPrice = (stockPrice, amount) => {
  if (amount === "." || amount === "") {
    return "";
  }
  return String((Number(stockPrice) * Number(amount)).toFixed(2));
};

export const roundAmount = (stockPrice, price) => {
  if (price === "." || price === "") {
    return "";
  }
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

const validateAmount = (numString) => {
  //in numString includes spaces return false
  if (numString.includes(" ")) {
    return false;
  }
  if (!isNaN(numString) || numString === "." || numString === "") {
    return true;
  }
  return false;
};

export const newAmountFunc = (
  currentAmount,
  targetAmount,
  maxAmount,
  stockPrice
) => {
  //validate that targetAmount is a number, "." or ""
  if (validateAmount(targetAmount)) {
    //if targetAmount is "." or "" return empty string as price
    if (targetAmount === "" || targetAmount === ".") {
      return {
        price: "",
        amount: targetAmount,
      };
    }
    //if targetAmount is less then 0 abs the value
    if (Number(targetAmount) < 0) {
      targetAmount = String(Math.abs(Number(targetAmount)));
    }
    //if target has more then 4 decimals round to 4
    if (
      targetAmount.split(".").length > 1 &&
      targetAmount.split(".")[1].length > 4
    ) {
      targetAmount = Number(targetAmount).toFixed(5).slice(0, -1);
    }
    //if targetAmount is greater then maxAmount return data based on maxAmount
    if (Number(targetAmount) > Number(maxAmount)) {
      targetAmount = maxAmount;
    }
    return {
      price: roundPrice(stockPrice, targetAmount),
      amount: targetAmount,
    };
  } else {
    return {
      price: roundPrice(stockPrice, currentAmount),
      amount: currentAmount,
    };
  }
};

// const validatePrice = (numString) => {
//   //in numString includes spaces return false
//   if (numString.includes(" ")) {
//     return false;
//   }
//   if (!isNaN(numString) || numString === "." || numString === "") {
//     return true;
//   }
//   return false;
// };

export const newPriceFunc = (
  currentPrice,
  targetPrice,
  maxAmount,
  stockPrice
) => {
  //validate that targetPrice is a number, "." or ""
  if (validateAmount(targetPrice)) {
    //if targetPrice is "." or "" return empty string as price
    if (targetPrice === "" || targetPrice === ".") {
      return {
        price: targetPrice,
        amount: "",
      };
    }
    //if targetPrice is less then 0 abs the value
    if (Number(targetPrice) < 0) {
      targetPrice = String(Math.abs(Number(targetPrice)));
    }
    //if target has more then 2 decimals round to 2
    if (
      targetPrice.split(".").length > 1 &&
      targetPrice.split(".")[1].length > 2
    ) {
      targetPrice = Number(targetPrice).toFixed(3).slice(0, -1);
    }
    //if targetPrice is greater then maxAmount * price rounded return data based on maxAmount
    if (
      Number(targetPrice) >
      Number((Number(maxAmount) * Number(stockPrice)).toFixed(2))
    ) {
      targetPrice = (Number(maxAmount) * Number(stockPrice)).toFixed(2);
    }
    return {
      price: targetPrice,
      amount: roundAmount(stockPrice, targetPrice),
    };
  } else {
    return {
      price: currentPrice,
      amount: roundAmount(stockPrice, currentPrice),
    };
  }
};
