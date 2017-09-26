var mainNav = document.querySelector(".main-nav");
var navToggle = document.querySelector(".header__nav-toggle");
//  скрываем меню по умолчанию
mainNav.classList.add("main-nav--close");

navToggle.addEventListener("click", function(event) {
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
