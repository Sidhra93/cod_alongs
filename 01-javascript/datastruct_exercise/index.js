console.log("The Recipe Card");
var recipe = {
  title: "Mole",
  serves: 2,
  ingredients: ["Cinnamon", "Cumin", "Cocoa"]
}

console.log(recipe.title);
console.log("Servings: " + recipe.serves);
console.log("Ingredients:");
console.log(recipe.ingredients[0]);
console.log(recipe.ingredients[1]);
console.log(recipe.ingredients[2]);

console.log("\n \n");

console.log("The Reading List");
var books = [
  {
    title: "The Hobbit",
    author: "J. R. R. Tolkien",
    alreadyRead: false
  },
  {
    title: "Harry Potter",
    author: "J. K. Rowling",
    alreadyRead: true
  }
]

var status;
for (var i = 0; i < books.length; i++) {
  status = console.log(books[i].title + " " + books[i].author);
  if (books[i].alreadyRead === true) {
    console.log("You have already Read " + status);
  } else {
    console.log("You still need to read " + status);
  }
}
console.log("\n \n");

console.log("The Movie Database");
var title;
var duration;
var stars;
var movies = [
  {
    title: "Puff the Magic Dragon",
    duration: 30,
    stars: ["Puff", "Jackie", "Living Sneeze"]
  },
  {
    title: "Tangled",
    duration: 120,
    stars: ["Flynn", "Rapunzel", "Pascal"]
  }
]

var movieInfo = function(){
  title = movies[i].title;
  duration = movies[i].duration;
  stars = "";
  for (var j = 0; j < movies[i].stars.length; j++) {
    stars +=  movies[i].stars[j] + ", ";
  }
  console.log(title + " lasts for " + duration + " minutes. Stars: " + stars);
}

for (var i = 0; i < movies.length; i++) {
  movieInfo();
}
