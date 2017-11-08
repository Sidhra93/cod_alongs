class Atm{
  constructor(type){
    this.type = type
    this.balance = 0
    this.transactionHistory = []
  }

  deposit(money){
    this.transactionHistory.push(`+${money}`)
    return this.balance += money

  }

  withdraw(money){
    this.transactionHistory.push(`-${money}`)
    return this.balance -= money

  }

  showBalance(){
    return this.balance
  }

  showTransactionHistory(){
    return this.transactionHistory.join()
  }
}

var a1 = new Atm("checking")
console.log(a1.deposit(200));
console.log(a1.deposit(100));
console.log(a1.withdraw(40));
console.log(a1.showTransactionHistory());
