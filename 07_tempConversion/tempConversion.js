const convertToCelsius = function(tempInFahrenheit) {
  let tempInCelsius = (tempInFahrenheit - 32) * 5/9;
  let tempInCelsiusRounded = parseFloat(tempInCelsius.toFixed(1));
  return tempInCelsiusRounded;
};

const convertToFahrenheit = function(tempInCelsius) {
  let tempInFahrenheit = (tempInCelsius * 9/5) + 32;
  let tempInFahrenheitRounded = parseFloat(tempInFahrenheit.toFixed(1));
  return tempInFahrenheitRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
