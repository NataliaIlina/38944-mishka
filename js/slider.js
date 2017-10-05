var slider = document.querySelector('.feedback__slider-inner');
var btnPrev = document.querySelector('.feedback__toggle--prev');
var btnNext = document.querySelector('.feedback__toggle--next');
var slides = document.querySelectorAll('.feedback__slide');

//номер текущего слайда
var slideNumber = 1;
//кол-во слайдов
var slideCount = slides.length;
//надо ли?
var slideWidth;
var translateWidth;

//для задания нужной величины транслейта умножаем ширину слайдера на номер текущего слайда
// var translateWidth = - slideWidth * slideNumber;


function nextSlide(){
  if(slideNumber < slideCount){
    slideWidth = document.querySelector('.feedback__slider').offsetWidth;
    translateWidth = - slideWidth * slideNumber;
    console.log(translateWidth);
    slider.style.transform = 'translateX('+ translateWidth +'px)';
    slideNumber++;
  }
}

function prevSlide(){
  if(slideNumber > 1){
    slideNumber--;
    slideWidth = document.querySelector('.feedback__slider').offsetWidth;
    translateWidth = - slideWidth * (slideNumber - 1);
    console.log(translateWidth);
    slider.style.transform = 'translateX('+ translateWidth +'px)';
  }
}

btnNext.addEventListener('click', nextSlide);
btnPrev.addEventListener('click', prevSlide);
//пока не хватает мозгов, чтоб задизейблить кнопки при первом и последнем слайде...
