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

//a function that takes in a number string and gets rid of pointless 0's and periods
const cleanNumber = (numberString) => {
  return String(Number(numberString));
};

const roundToThreeSigFigs = (numberString) => {
  //clean number string
  numberString = cleanNumber(numberString);
  //if number greater then one, just return numberString
  if (Number(numberString) > 1) {
    return numberString;
  }
  //go through number until value that is not 0
  for (let i = 2; i < numberString.length; i++) {
    //when value isn't zero slice of first 2 digits then rounds third digit
    if (numberString[i] !== "0") {
      let returnNumber = numberString.slice(0, i + 2);
      let finalDigit = numberString[i + 3] || "0";
      if (Number(finalDigit) >= 5) {
        returnNumber += String(Number(numberString[i + 2]) + 1);
      } else {
        returnNumber += numberString[i + 2];
      }
      return returnNumber;
    }
  }
  //return 0 if nothing but zeros
  return "0";
};

const addCommas = (numberString) => {
  // split the number on .
  let split = numberString.split(".");
  let number = split[0];
  let decimal = split.length > 1 ? split[1] : "";
  //declare result and counter values
  let result = "";
  let c = 0;
  // loop through number backwards
  for (let i = number.length - 1; i >= 0; i--) {
    result = number[i] + result;
    c++;
    // add a comma every three digits, but don't add one at the start
    if (c === 3 && i !== 0) {
      result = "," + result;
      c = 0;
    }
  }
  // if decimal add it to th end
  if (decimal) {
    result += "." + decimal;
  }
  return result;
};

const roundToThreeDigits = (number) => {
  return number.toFixed(3);
};

export const formatNumber = (numberString) => {
  //if number is greater then or equal to one,
  //round it to 3 digits and return it with commas
  const number = Number(numberString);
  let returnNumber;
  if (number >= 1) {
    //round number to three digits
    const roundedNumber = roundToThreeDigits(number);
    //add commas
    returnNumber = addCommas(roundedNumber);
  } else {
    returnNumber = roundToThreeSigFigs(numberString);
  }
  return returnNumber;
};
