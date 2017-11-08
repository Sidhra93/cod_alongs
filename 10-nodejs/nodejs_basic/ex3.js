// modules

// module pattern

//fs is a built in module installed with node

var fs = require('fs'); // requiring the file system module

var buffer = fs.readFileSync("ex1.js");
console.log(buffer.toString());
