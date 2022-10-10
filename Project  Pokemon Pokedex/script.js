window.onload = () => {
    soundTrack.autoplay = true;
    soundOff.style = 'display: none'
};

const btnAudio = document.querySelector('#btnAudio');
const inputName = document.querySelector('#inputName');
const inputId = document.querySelector('#inputId');
const btnSearch = document.querySelector('#searchBtn');

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

async function getPokemon(nameOrId) {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId}/`)
        .then(result => result.json())
        .then(data => {
            pokemonImg.src = data.sprites.front_default;
            pokemonName.textContent = data.name;
            pokemonContent.textContent = `Height: ${data.height / 10}m Weight: ${data.weight / 10}kg`;

            console.log(data);
        })
        .catch(error => console.error(error));
};

btnSearch.addEventListener('click', () => {
    if(inputName.value) getPokemon(inputName.value)
    if(inputId.value) getPokemon(inputId.value)
    else pokemonContent.textContent = 'Pokémon not found! Name or Id Invalid.'
});

