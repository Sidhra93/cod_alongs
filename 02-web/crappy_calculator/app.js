console.log("ready to calculate");

//find the span
var resultSpan = document.querySelector('span');
//resultSpan.textContent = '4';
var num1Input = document.querySelector('#num1');
var num2Input = document.querySelector('#num2');
var calculateButton = document.querySelector('button');

console.log(num1Input.value);

//resultSpan.textContent = (num1Input.value + num2Input.value);

// var someFunction = function(){
//   console.log("processing.......");
// }

var addTwoNumbers = function(num1, num2){
  return num1 + num2;
}

calculateButton.addEventListener('click', function(){
  var num1 = Number(num1Input.value);
  var num2 = Number(num2Input.value);
  var total = addTwoNumbers(num1, num2);
  resultSpan.textContent = total;
})
