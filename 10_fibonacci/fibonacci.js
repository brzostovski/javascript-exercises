const fibonacci = function(n) {
  const nthFibon = parseInt(n);
  if (nthFibon <= 0) {
    return 'OOPS';
  }
  let arrOfFibon = [];
  arrOfFibon[0] = 0;
  arrOfFibon[1] = 1;
  for (let i = 2; i <= nthFibon; i++) {
    arrOfFibon[i] = arrOfFibon[i - 1] + arrOfFibon [i - 2];
  }
  return arrOfFibon[nthFibon];
};

// Do not edit below this line
module.exports = fibonacci;
