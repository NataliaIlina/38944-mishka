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

if(slideNumber === 1){
  btnPrev.disabled = true;
}

//для задания нужной величины транслейта умножаем ширину слайдера на номер текущего слайда
// var translateWidth = - slideWidth * slideNumber;

function nextSlide(){
  if(slideNumber < slideCount){
    slideWidth = document.querySelector('.feedback__slider').offsetWidth;
    translateWidth = - slideWidth * slideNumber;
    console.log(translateWidth);
    slider.style.transform = 'translateX('+ translateWidth +'px)';
    slideNumber++;
    if(slideNumber === 1){
      btnPrev.disabled = true;
    }
    else if(slideNumber === slideCount){
      btnNext.disabled = true;
    }
    else {
      btnPrev.disabled = false;
      btnNext.disabled = false;
    }
  }
}

function prevSlide(){
  if(slideNumber > 1){
    slideNumber--;
    slideWidth = document.querySelector('.feedback__slider').offsetWidth;
    translateWidth = - slideWidth * (slideNumber - 1);
    console.log(translateWidth);
    slider.style.transform = 'translateX('+ translateWidth +'px)';
    if(slideNumber === 1){
      btnPrev.disabled = true;
    }
    else if(slideNumber === slideCount){
      btnNext.disabled = true;
    }
    else {
      btnPrev.disabled = false;
      btnNext.disabled = false;
    }
  }
}

btnNext.addEventListener('click', nextSlide);
btnPrev.addEventListener('click', prevSlide);
