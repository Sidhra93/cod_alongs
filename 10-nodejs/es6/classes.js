class Animal{
  constructor(name){
    this.name = name
  }

  getName(){
    return this.name
  }
}

var a1 = new Animal('lucky13')
var a2 = new Animal('crab hands')

// factory or module pattern
// function animalMaker(name){
//   var name = name
//   return {
//     getName: () => name
//   }
// }

console.log(a1.getName());
console.log(a2.getName());
