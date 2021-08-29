


const navBtn = document.querySelector('.js-btn-mobile');
const navMoblie = document.querySelector('.header__mobile--nav');

var isOpen = false;
navBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(isOpen) {
        navMoblie.classList.remove('show--navMoblie');
    }else{
        navMoblie.classList.add('show--navMoblie');
    }
    isOpen = !isOpen;
})