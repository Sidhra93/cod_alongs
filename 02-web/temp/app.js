console.log("hello world");

var one = function(){
  console.log("I am function one");
}

var two = function(){
  console.log("I am function two");
}

var three = function(fn){
  fn();
}

three(two); //will first run line 11 and then run line 7
one();// will only run line 1
