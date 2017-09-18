// var balance = 0;
// var deposit = function(amount){
//   balance = balance + amount;
// }

var savings = {
  balance: 0,
  deposit: function(){
    savings.balance = savings.balance + amount;
  }
}

//-------------------------
//PRESENTATION FUNCTION
//-------------------------

var balancediv = document.querySelector(".balance");
var amountInput = document. querySelector(".amount");
var depositButton = document.querySelector(".deposit-button");

var renderBalance = function(){
  balancediv.textContent = "$" + savings.balance;
}

depositButton.addEventListener("click", function(){
  //input
  var amount = Number(amountInput.value);
  //process
  savings.deposit(amount);
  //output
  renderBalance();
});
