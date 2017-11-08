// console.log(magic);
// var magic = 'science'

if ("a" in window) {
  var a = 1; // var a = undefined in the first read. second time a is alread there in the window so it is true and therefore 1 will be assigned to a
}

console.log(a);

//javascript engine first reads all the declarations in a file then reads it a second time and reads the expressions.

doSometing() // can be called before the functions since it has been declared already

// function declarations
function doSometing(){
  console.log("doing something");
}

// function expression
var bam = function(){
  console.log(fruit);
  var fruit = "banana"
}

bam()
