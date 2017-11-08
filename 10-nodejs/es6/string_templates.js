function greeting(firstName = 'lucky', lastName = '13'){
  return "hello " + firstName + " " + lastName //before es6
}

function greeting(firstName = 'lucky', lastName = '13'){
  return `hello ${firstName} ${lastName}` //es6
}
