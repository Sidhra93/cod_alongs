function getFavColor(){
  return ['pink', 'mistyrose']
}

var favColors = getFavColor()
var [leastFavColor, favColor] = getFavColor()

console.log(favColor);

function getPersons(){
  return {
    name: 'lucky13',
    age: 13
  }
}

// var {name: personName, age: personAge} = getPersons()
// console.log(personName, personAge);

var {name, age} = getPersons()
console.log(name, age)
