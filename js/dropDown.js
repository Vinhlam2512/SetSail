


const li = document.querySelectorAll('.js-li');
const secondNav = document.querySelectorAll('.second-nav');

li.forEach(function(li,index) {
    li.onmouseover = function(e) {
        e.stopPropagation();
        secondNav[index].style.overflow = 'hidden';
    }
})
secondNav.forEach(function(secondNav,index) {
    secondNav.onmouseover = function(e) {
        e.stopPropagation();
        secondNav.style.overflow = '';
    }
})