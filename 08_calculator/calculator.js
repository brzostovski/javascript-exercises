const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbersArr) {
	return numbersArr.reduce((total, currentNumber) => total + currentNumber, 0);
};

const multiply = function(...numbers) {
  return numbers.reduce((total, currentNumber) => total * currentNumber, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    let nFact = n;
    do {
      nFact *= (n - 1);
      n--;
    } while (n > 1);
    return nFact;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
