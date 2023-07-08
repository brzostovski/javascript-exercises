const removeFromArray = function(givenArr, ...itemsToRemove) {
  for (const item of itemsToRemove) {
    for (const argument of givenArr) {
      if (argument === item) {
        let index = givenArr.indexOf(argument);
        givenArr.splice(index, 1);
      }
    }
  }
  return givenArr;
};

// Do not edit below this line
module.exports = removeFromArray;
