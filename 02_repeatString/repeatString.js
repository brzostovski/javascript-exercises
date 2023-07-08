const repeatString = function(stringToRepeat, repeatsNumber) {
  let repeatedString = ``;
  if (repeatsNumber < 0) {
    return 'ERROR';
  }
  for (let i = 0; i < repeatsNumber; i++) {
    repeatedString += stringToRepeat;
  }
  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
