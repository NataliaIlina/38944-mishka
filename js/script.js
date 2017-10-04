var mainNav = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");
var buyBtns = document.querySelectorAll(".buy-btn");
var overlay = document.querySelector(".overlay");
var modal = document.querySelector(".modal");
if(modal){
  var modalSubmit = modal.querySelector(".modal__btn");
}

//  скрываем меню по умолчанию и показываем скрытую кнопку
if(navToggle){
  mainNav.classList.add("main-nav--close");
  navToggle.classList.remove("main-nav__toggle--nojs");

  navToggle.addEventListener("click", function(event){
    event.preventDefault();
    if(!navToggle.classList.contains("main-nav__toggle--close") &&  mainNav.classList.contains("main-nav--close")){
      mainNav.classList.remove("main-nav--close");
      navToggle.classList.add("main-nav__toggle--close");
    }
    else {
      mainNav.classList.add("main-nav--close");
      navToggle.classList.remove("main-nav__toggle--close");
    }
  })
}

if(modal) {
  for(var i = 0; i < buyBtns.length; i++){
    buyBtns[i].addEventListener("click", function(event){
      event.preventDefault();
      overlay.classList.add("overlay--show");
      modal.classList.add("modal--show");
    })
  }

  overlay.addEventListener("click", function(){
    overlay.classList.remove("overlay--show");
    modal.classList.remove("modal--show");
  })

  modal.addEventListener("click", function(event) {
    event.stopPropagation();
  })

  modalSubmit.addEventListener("submit", function(event){
    overlay.classList.remove("overlay--show");
    modal.classList.remove("modal--show");
  })

}
