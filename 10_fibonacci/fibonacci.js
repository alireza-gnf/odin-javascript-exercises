const sequence = [0, 1, 1];

const fibonacci = function (nth) {
  if (nth < 0) {
    return "OOPS";
  }
  if (sequence[nth] === undefined) {
    sequence[nth] = fibonacci(nth - 1) + fibonacci(nth - 2);
  }
  return sequence[nth];
};

// Do not edit below this line
module.exports = fibonacci;
