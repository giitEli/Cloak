export const round = (value, num = 100) => {
  return Math.round(Number(value) * num) / num;
};

export const displayRound = (value, num = 100) => {
  const roundedNum = round(value, num);
  let stringNum = String(roundedNum);
  if (!stringNum.includes(".")) {
    stringNum += ".";
  }
  while (stringNum.length < stringNum.indexOf(".") + String(num).length) {
    stringNum += "0";
  }
  return stringNum;
};
