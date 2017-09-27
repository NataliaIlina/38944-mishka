var mainNav = document.querySelector(".main-nav");
var navToggle = document.querySelector(".header__nav-toggle");
var buyBtns = document.querySelectorAll(".buy-btn");
var overlay = document.querySelector(".overlay");
var modal = document.querySelector(".modal");
if(modal){
  var modalSubmit = modal.querySelector(".modal__btn");
}

//  скрываем меню по умолчанию и показываем скрытую кнопку
mainNav.classList.add("main-nav--close");
navToggle.classList.remove("header__nav-toggle--nojs");

navToggle.addEventListener("click", function(event){
  event.preventDefault();
  if(!navToggle.classList.contains("header__nav-toggle--close") &&  mainNav.classList.contains("main-nav--close")){
    mainNav.classList.remove("main-nav--close");
    navToggle.classList.add("header__nav-toggle--close");
  }
  else {
    mainNav.classList.add("main-nav--close");
    navToggle.classList.remove("header__nav-toggle--close");
  }
})

for(var i = 0; i < buyBtns.length; i++){
  buyBtns[i].addEventListener("click", function(event){
    event.preventDefault();
    overlay.classList.add("overlay--show");
    modal.classList.add("modal--show");
  })
}

modalSubmit.addEventListener("submit", function(){
  overlay.classList.remove("overlay--show");
  modal.classList.remove("modal--show");
})

overlay.addEventListener("click", function(){
  overlay.classList.remove("overlay--show");
  modal.classList.remove("modal--show");
})
