

const btn = document.querySelector('.video__btn');
const video = document.querySelector('.video-play');
const modal = document.querySelector('.video');

var playing = false;

function run() {
    modal.addEventListener('click',function(){
        playing = !playing;
        if(playing == true){
            playVideo();
        }else{
            pauseVideo();
        }
    })
}
function playVideo() {
    video.play();
    btn.style.display = 'none';
    video.volume = 0.5;
}
function pauseVideo() {
    video.pause();
    btn.style.display = 'block';
}
run();