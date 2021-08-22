


const firstNavs = document.querySelectorAll('li .have_second-nav--2');
const secondNavs = document.querySelectorAll('.second-nav--2')

firstNavs[0].addEventListener('blur',function() {
    secondNavs[0].style.visibility = 'visible';
})