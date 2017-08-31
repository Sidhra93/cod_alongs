//QUESTION_ONE
var lengths = function(stringArray){
  var newArray = [];
  for (var i = 0; i < stringArray.length; i++) {
    newArray.push(stringArray[i].length);
  }
  return newArray;
}

var array = ["apple", "mango", "orange"];
console.log(lengths(array));

//QUESTION_TWO
var transmogrifier = function(num1, num2, num3){
  ans = Math.pow((num1 * num2), num3);
  return ans;
}

console.log(transmogrifier(2, 2, 3));

//QUESTION_THREE
var wordReverse = function(word){
  var reverseWord = word.split("").reverse().join().replace(/,/g, "");
  return reverseWord;
}

console.log(wordReverse("hello world"));
