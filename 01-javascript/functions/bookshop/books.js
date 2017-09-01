console.log("connected");

var bookshelf = [
  {
    name: "Kasun's Diary",
    price: 29.99,
    stock: 5
  },
  {
    name: "DT's Journal",
    price: 99.99,
    stock: 7
  },
  {
    name: "Pride and Prejudice",
    price: 19.99,
    stock: 100
  }
];

//allow customers to purchase books
var purchase = function(customerBook, quantity, customerName){
  var total = calculateCost(customerBook, quantity);
  updateStock(customerBook, quantity);
  return displayToCustomer(customerBook, quantity, customerName, total);
}

var calculateCost = function(customerBook, quantity){
  totalPrice = customerBook.price * quantity * 1.1;
  return totalPrice;
}

var updateStock = function(customerBook, quantity){
  bookshelf.forEach(function(book){
    if (book.name === customerBook.name) {
      book.stock -= quantity; // book.stock can also be used as bookshelf[index].stock which then would need to pass the index parametre in the function.
    }
  });
}

var displayToCustomer = function(customerBook, quantity, customerName, total){
  return "Thank you, " + customerName + " for purchasing a copy of " + customerBook.name + ". You purchased " + quantity + " copies, with a total cost of " + total.toFixed(2) + ".";
}
