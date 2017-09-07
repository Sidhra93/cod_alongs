var bowl = document.querySelector('.bowl');
var flushbtn = document.querySelector(".flush-btn");
var poop = function(){
  bowl.classList.add("poop");
}

var flush = function(){
  bowl.classList.remove("poop");
}


bowl.addEventListener('click', poop);
flushbtn.addEventListener("click", flush);
