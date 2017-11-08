// function expression
var sayHi = function(name){
  return `hi ${name}`
}

// -------------------------------------------------

var sayHi = name => `hi ${name}` //only when there is one parameter and one line in the function body

// when there is multiple lines of code in the body
var sayHi = (firstName, lastName) => {
  var number = 1 + 1
  return `hi ${firstName} ${lastName}`
}


const languages = ['ruby', 'php', 'js', 'es6']

// before es6
const languagesUpcased = languages.map(function(language){
  return language.toUpperCase()
})

// es6
const languagesUpcased = languages.map(language => language.toUpperCase())

console.log(languagesUpcased);
