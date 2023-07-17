const palindromes = function (str) {
  strippedStr = (str.replace(/\W/g, "")).toLowerCase();
  arrOfStr = strippedStr.split('');
  let lastIndex = arrOfStr.length - 1;
  let compareArr = [];
  for (let i = 0; i <= lastIndex; i++) {
    compareArr[lastIndex - i] = arrOfStr[i];
  }
  const compareStr = (compareArr.toString()).replaceAll(',', '');
  if (compareStr === strippedStr) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
