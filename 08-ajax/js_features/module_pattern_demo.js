function counterMaker(){
  var count = 0;
  return {
    getCount: function(){
      return count;
    },
    increment: function(){
      count += 1;
      return count;
    }
  }
}

var counter = counterMaker()

// module pattern
var accountMaker = function(initialBalance){
  var balance = initialBalance || 0;

  var publicApi = {
    getBalance: function(){
      return balance;
    },
    deposit: function(amount){
      balance  = balance + amount;
      return balance;
    }
  }
  return publicApi;
}

var account = accountMaker(5000);
account.getBalance();

// iife = immediately invoke function expression

(function(){
  var a;
  var b;
  var c;
})();
