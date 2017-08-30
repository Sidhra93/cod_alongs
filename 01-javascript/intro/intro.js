console.log('hello javascript');
console.log('hello again');
console.log('goodbye');

var age = 15;
if (age < 18) {
  console.log('come back later');
} else {
  console.log('welcome');
}

var year = 2018;
var y = new Date();

if (year === 2017) {
  console.log("I'm in the present");
} else if (year < 2017) {
  console.log("Whoa! Blast from the past. It is " + y.getFullYear());
} else {
  console.log("Greetings from the future. It is " + y.getFullYear());
}


var isLucky13Awesome = true;
if (isLucky13Awesome) {
  console.log('wdi13 rocks');
}

var name = "";
if (name) {
  console.log("hello " + name);
}

var points = 0;
if (points) {
  console.log(points);
}

var firstName;
if (firstName) {
  console.log(firstName);
}
