

const progress = document.querySelectorAll('.current');
const current = document.querySelectorAll('.title .percent')

var percent = [];
var check2 = true;
function getPercent() {
    for (var i = 0; i < progress.length; i++) {
        percent[i] = progress[i].getAttribute('percent');
    }
}
window.addEventListener("scroll", function (e) {
    var scroll = this.scrollY;
    if (scroll >= 700 && check2 == true) {
        for (var i = 0; i < progress.length; i++) {
            load(i);
        }
        check2 = false;
    }

});
function load(i) {
    var j = 0;
    setInterval(function () {
        j++;
        getPercent();
        if (j <= percent[i]) {
            current[i].innerHTML = j + '%';
            progress[i].style.maxWidth = j + '%';
        }
    }, 30)
}