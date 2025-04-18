const repeatString = function (string, count) {
  if (string === "" || count === 0) {
    return "";
  }

  if (count < 0) {
    return "ERROR";
  }

  let repeatedString = "";
  for (let i = 0; i < count; i++) {
    repeatedString += string;
  }

  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
