const reverseString = function(input) {
  let stringToReverse = input.split(``);
  let reversedString = [];
  let originalStringLen = input.length;
  for (let i = 1; i <= originalStringLen; i++) {
    reversedString[i - 1] = stringToReverse[originalStringLen - i];
  }
  return reversedString.join(``);
};

// Do not edit below this line
module.exports = reverseString;
