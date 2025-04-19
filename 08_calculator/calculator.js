const add = function (numA, numB) {
  return numA + numB;
};

const subtract = function (numA, numB) {
  return numA - numB;
};

const sum = function (numArr) {
  return numArr.reduce((sum, nextNum) => {
    sum += nextNum;
    return sum;
  }, 0);
};

const multiply = function (numArr) {
  return numArr.reduce((multiplied, nextNum) => {
    multiplied *= nextNum;
    return multiplied;
  });
};

const power = function (num, pow) {
  return num ** pow;
};

const factorial = function (num) {
  if (num === 0 || num === 1) {
    return 1;
  }

  return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
