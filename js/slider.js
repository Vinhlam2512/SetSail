const lSlider = document.querySelectorAll(".js-l-slider");
const rSlider = document.querySelectorAll(".js-r-slider");
const textSlider = document.querySelectorAll(".js-text-slider");

const prevBtn = document.querySelector(".l-slider--arrow");
const nextBtn = document.querySelector(".r-slider--arrow");

var numberOfSliders = lSlider.length;
var index = 0;
var check = false;
// auto change img

function add(index) {
    lSlider[index].classList.add('show');
    rSlider[index].classList.add('show');
    setTimeout(function() {
        textSlider[index].classList.add('show');
    },600);
}
function remove() {
    for (var i = 0; i < numberOfSliders; i++) {
        lSlider[i].classList.remove('show');
        rSlider[i].classList.remove('show');
        textSlider[i].classList.remove('show');
    }
}
function autoSlider() {
    if (index < numberOfSliders) {
        if(check == true) {
            index++;
            add(index);
        }else{
            add(index);
        }
        index+= 1;
    } else {
        remove();
        index = 0;
        add(index);
        index++;
    }
    console.log('1111111111111111111');
}

nextBtn.addEventListener('click', function(e) {
    check = true;
    e.preventDefault();
    clearInterval(autoSliderInterval);
    remove();
    index++;
    if(index > numberOfSliders - 1){
        index = 0;
        add(index);
        console.log(index);
    } else {
        remove();
        add(index);
    }
    autoSliderInterval = setInterval(autoSlider, 4000);
})
prevBtn.addEventListener('click', function(e) {
    check = true;
    e.preventDefault();
    clearInterval(autoSliderInterval);
    remove();
    index--;
    if(index < 0){
        index = 2;
        add(index);
        console.log(index);
    } else {
        remove();
        add(index);
    }
    autoSliderInterval = setInterval(autoSlider, 4000);
})
var autoSliderInterval = setInterval(autoSlider, 4000);