// console.log(process.argv[2] + process.argv[3] + process.argv[4]);

var sum = 0;
for (var i = 2; i < process.argv.length; i++) {
  sum += +process.argv[i];
}
console.log(sum);
