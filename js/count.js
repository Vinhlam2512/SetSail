

const quantity = document.querySelectorAll('.quantity__des span');
var data = [];
var check3 = true;
function getData() {
    for (var i = 0; i < quantity.length; i++) {
        data[i] = quantity[i].getAttribute('data');
    }
}
getData();

function countData(i) {
    var j = 0;
    setInterval(function () {
        j++;
        if (j <= data[i]) {
            quantity[i].innerHTML = j;
        }
    }, 10)
}
window.addEventListener("scroll", function () {
    var scroll = this.scrollY;
    if (scroll >= 2400 && check3 == true) {
        for (var i = 0; i < quantity.length; i++) {
            countData(i);
        }
        check3 = false;
    }
});

