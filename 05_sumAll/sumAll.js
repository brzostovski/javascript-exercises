const sumAll = function(firstNumber, secondNumber) {
  if (firstNumber < 0 ||
    secondNumber < 0 ||
    typeof firstNumber !== `number` ||
    typeof secondNumber !== `number`) {
    return `ERROR`;
  }
  let start = 0;
  let end = 0;
  let sumInBetween = 0;
  if (firstNumber < secondNumber) {
    start = firstNumber;
    end = secondNumber;
  } else {
    start = secondNumber;
    end = firstNumber;
  }
  let i = start;
  do {
    sumInBetween += i;
    i++;
  } while (i <= end);
  return sumInBetween;
};

// Do not edit below this line
module.exports = sumAll;
