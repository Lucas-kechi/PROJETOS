window.onload = () => {
    soundTrack.autoplay = true;
    soundOff.style = 'display: none'
};

const btnAudio = document.querySelector('#btnAudio')

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

async function getPokemon() {
    await fetch('https://pokeapi.co/api/v2/pokemon/4/')
        .then(result => result.json())
        .then(data => {
            pokemonImg.src = data.sprites.front_default;
        })
        .catch(error => console.error(error))
}

getPokemon()
