// var fruitElemList = document.querySelectorAll("div>*");
//
//
// fruitElemList.forEach(function(fruitElem){
//   fruitElem.addEventListener("click", function(event){
//     console.log(event.target.textContent);
//   });
// });

var div = document.querySelector("div");

div.addEventListener("click",function(event){
  if (event.target.tagName === "BANANA") {
    console.log(event.target);
  }
});
