// 4 to 5 rules

// how to work the context

// 1. default binding
console.log('1');
function doStuff(){
  console.log(this); // this => global
}

doStuff()

// 2. implicit binding
console.log('2');
var boo = {
  doStuff: function(){
    console.log(this); // this => boo object
  }
}

boo.doStuff()

// 3. explicit binding
console.log('3');
doStuff.call({haha: 'over here'})
var person = {name: 'me'}
doStuff.apply(person)

// 4. hard binding
console.log('4');
var hardStuff = doStuff.bind({hard: 'core'})

// 5. puff magic - constructor function
function cat(){
  this.name = 'unicorn'
}
var c1 = new cat() //returns a new object with THIS bind to it
c1.name
