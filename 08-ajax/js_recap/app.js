window.addEventListener('load', function(){
  var h1 = document.querySelector("h1");
  console.log(h1.textContent);

  // querySelector.addEventListener()
  $('.stuff').on('click', function(){
    console.log(event.target.textContent);
  });
});

// var sample = function(arr){
//   var index = Math.floor(Math.random() * arr.length);
//   return arr[index];
// }

var wdiLib = {
  sample: function(arr){
    var index = Math.floor(Math.random() * arr.length);
    return arr[index];
  }
}

// wdiLib.sample()

var scores = {
  jon: 5,
  fiona: 6
};

// var scores = [1, 2, 3, 4]

// _.each(scores, function(score, name){
//   console.log("key is " + name);
//   console.log("value is " + score);
// });
