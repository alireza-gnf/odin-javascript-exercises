const palindromes = function (string) {
  const onlyAlphaNumeric = string.replace(/[\W_]/g, "").toLowerCase();
  return onlyAlphaNumeric === onlyAlphaNumeric.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
