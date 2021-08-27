
const btnBackTop = document.querySelector('.backToTop');

window.addEventListener('scroll',function(e) {
    var scroll = this.scrollY;
    console.log(scroll);
    if(scroll >= 700){
        btnBackTop.style.display = 'block';
    }else{
        btnBackTop.style.display = 'none';
    }
})