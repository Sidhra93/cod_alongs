console.log("loops");

/*for (var num = 1; num <= 100; num++) {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log("CakePudding");
  }else if (num % 5 === 0) {
    console.log("Pudding");
  }else if (num % 3 === 0) {
    console.log("Cake");
  }else {
    console.log(num);
  }
}*/

var secretNumber = 42;
var number;
var i = 0;

while (i < 10) {
  number = parseInt(prompt("Enter a number: "));
  if (number === secretNumber) {
    console.log("Your guess is correct");
    break;
  } else if (number < secretNumber) {
    console.log("Guess a higher number");;
  } else {
    console.log("Guess a lower number");
  }
  i++;
}
console.log("Sorry you have no more guesses");
//var number = prompt("Enter number: ");

//console.log("After prompt");
