const sumAll = function (numA, numB) {
  if (
    numA < 0 ||
    numB < 0 ||
    parseInt(numA) !== numA ||
    parseInt(numB) !== numB
  ) {
    return "ERROR";
  }
  [numA, numB] = [...[numA, numB].sort()];
  let sum = 0;
  for (let i = numA; i <= numB; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
