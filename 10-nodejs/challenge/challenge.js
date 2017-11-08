var hackers = [
  {
    name: 'jon',
    dangerous: false,
    hourlyRateFee: 100
  },
  {
    name: 'fiona',
    dangerous: true,
    hourlyRateFee: 220
  },
  {
    name: 'ryan',
    dangerous: false,
    hourlyRateFee: 70
  }
];

// hackers
//   select all harmless ones
//   extract hourly rate
//   add GST to each
//   sum

// hackers
//   .filter(isHarmless)
//   .map(pluckHourlyRate) // transformation
//   .reduce(sum)

var harmlessHackers = hackers.filter(function(hacker){
  return hacker.dangerous === false;
});

console.log(harmlessHackers);

var fees = harmlessHackers.map(function(harmlessHacker){
  return harmlessHacker.hourlyRateFee;
});

console.log(fees);

var feesWithGST = fees.map(function(fee){
  return fee * 1.1;
});
console.log(feesWithGST);

var total = feesWithGST.reduce(function(accum, feeWithGST){
  return accum + feeWithGST;
});

console.log(total);

// var totalHourlyRate = 0;
// var harmlessHackers = 0
//
// hackers.forEach(function(hacker){
//   if (hacker.dangerous === false) {
//     harmlessHackers += 1
//     totalHourlyRate += hacker.hourlyRateFee * 1.1;
//   }
// });
//
// var avgHourlyRate = totalHourlyRate / harmlessHackers;
//
// console.log(totalHourlyRate);
// console.log(avgHourlyRate);
