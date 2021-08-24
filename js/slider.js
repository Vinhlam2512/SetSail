
const lSlider = document.querySelectorAll('.js-l-slider');
const rSlider = document.querySelectorAll('.js-r-slider');
const textSlider = document.querySelectorAll('.js-text-slider');

// console.log(numberOfSliders);

var index = 1;

showSlider = function() {
    var numberOfSliders = lSlider.length;
   
    if(lSlider[index].classList.contains('show')){ 
        textSlider[index].classList.remove('show');
        lSlider[index].classList.remove('show');
        rSlider[index].classList.remove('show');
        index+= 1;
    }
    if(index == numberOfSliders){
        index = 0;
    }
        lSlider[index].classList.add('show');
        rSlider[index].classList.add('show');
        setTimeout(function(){
            textSlider[index].classList.add('show');
        },900)

    console.log('1');
}
setInterval(showSlider, 4000);
