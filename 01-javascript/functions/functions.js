//FUNCTION EXAMPLE
var celsius = 23;
var temp = [];

var celsiusToFahrenheit = function(temp){
  fahrenheit = ((9 / 5) * temp) + 32;
  //console.log(fahrenheit);
  return fahrenheit;
}

temp =  celsiusToFahrenheit(celsius);


//THE AGE CALCULATOR
var calculateAge = function(birthYear, currentYear){
  var age = currentYear - birthYear - 1;
  var age2 = (currentYear - birthYear);
  var status = console.log("You are either " + age + " or " + age2);
  return status;
}

var currentYear = new Date().getFullYear();

calculateAge(1993, currentYear );
calculateAge(1991, currentYear);
calculateAge(2000, currentYear);


//LIFETIME SUPPLY CALCULATOR
var maxAge = 70;

var calculateSupply = function(age, amountPerDay){
  var supply = (maxAge - age) * 365  * amountPerDay;
  return "You will need " + supply + " to last you until the ripe old age of " + maxAge;
}

console.log(calculateSupply(45, 72));
console.log(calculateSupply(21, 32));
console.log(calculateSupply(33, 56));


//THE GEOMETRIZER
var calcCircumference = function(radius){
  var circ = 2 * (22/7) * radius;
  return "The circumference is " + circ.toFixed(2);
}

var calcArea = function(radius){
  var area = (22/7)*(radius * radius);
  return "The area is " + area.toFixed(2);
}

console.log(calcCircumference(8));
console.log(calcArea(8));
