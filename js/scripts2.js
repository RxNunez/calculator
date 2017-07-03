var bmi = function(weight, height) {
  return (703*(weight / (height * height)));
};

var weight = parseInt(prompt("Enter your weight in lbs:"));
var height = parseInt(prompt("Enter your height in inches:"));

alert(bmi(weight, height));

//Celsius
var celsius = function(fahrenheit) {
  return ((fahrenheit-32) * 5 / 9);
};

var fahrenheit = parseInt(prompt("Enter temperature in fahrenheit"));

var result = celsius(fahrenheit).toFixed(2);

alert(" The Temperature in celsius is " + result +".");

//fahrenheit
var fahrenheit = function(celsius) {
  return ((celsius * 9 / 5)+32);
};

var celsius = parseInt(prompt("Enter temperature in celsius"));

var result = fahrenheit(celsius).toFixed(2);

alert(" The Temperature in fahrenheit is " + result +".");
