window.onload = () => {
    soundTrack.autoplay = true;
    soundOff.style = 'display: none'
    console.log(soundTrack);
};

const btnAudio = document.querySelector('#btnAudio')

console.log(btnAudio)

btnAudio.addEventListener('click', () => {
    if(soundTrack.muted === false){
        soundTrack.muted = true;
        soundOn.style = "display: none";
        soundOff.style = "display: flex";
    } else {
        soundTrack.muted = false;
        soundOn.style = "display: flex";
        soundOff.style = "display: none";
    };
});
