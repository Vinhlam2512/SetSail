
const lSlider = document.querySelectorAll('.js-l-slider');
const rSlider = document.querySelectorAll('.js-r-slider');
const textSlider = document.querySelectorAll('.js-text-slider');

// console.log(numberOfSliders);

var index = 1;

showSlider = function() {
    var slide = [];
    var numberOfSliders = lSlider.length;
   
    if(lSlider[index].classList.contains('show')){ 
        lSlider[index].classList.remove('show');
        rSlider[index].classList.remove('show');
        textSlider[index].classList.remove('show');
        index+= 1;
    }
    if(index == numberOfSliders){
        slide.length = 0;
        index = 0;
    }
        lSlider[index].classList.add('show');
        rSlider[index].classList.add('show');
        textSlider[index].classList.add('show');

    console.log('1');
}
setInterval(showSlider, 1000);
