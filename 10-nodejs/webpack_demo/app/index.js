console.log('this is the index.js file');

console.log('2 + 2', 2 + 2);

var myLib = require('./hi')
myLib.sayHi()

var _ = require('underscore')

console.log(_.sample([1, 2, 3, 4, 5]));
