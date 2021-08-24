const progress1 = document.querySelector('.current1');
const progress2 = document.querySelector('.current2');
const progress3 = document.querySelector('.current3');
const current = document.getElementsByClassName('percent')
const a = document.querySelector('.popular__tours--des');

window.addEventListener("scroll", function (e) {
    var scroll = this.scrollY;
    console.log(progress1.clientHeight)
    if(scroll >= 700 ){
        upTo76();
        upTo92();
        upTo86();
    }
    
});

var upTo76 = function (){
    var i = 0;
    setInterval(function () {
        i+= 1;
        if(i < 77){
            current[0].innerHTML = i + '%';
            progress1.style.maxWidth = i + '%';
        }
    },30)
 
}
var upTo92 = function (){
    var i = 0;
    setInterval(function () {
        i+= 1;
        if(i < 93){
            current[1].innerHTML = i + '%';
            progress2.style.maxWidth = i + '%';
        }
    },30)
}
var upTo86= function (){
    var i = 0;
    setInterval(function () {
        i+= 1;
        if(i < 87){
            current[2].innerHTML = i + '%';
            progress3.style.maxWidth = i + '%';
        }
    },30)
}

