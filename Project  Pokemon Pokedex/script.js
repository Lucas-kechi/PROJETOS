window.onload = () => {
    soundTrack.autoplay = true;
    soundOff.style = 'display: none'

    getPokemon('pikachu')
};

const btnAudio = document.querySelector('#btnAudio');
const inputName = document.querySelector('#inputName');
const inputId = document.querySelector('#inputId');
const btnSearch = document.querySelector('#searchBtn');
const typeSpans = document.querySelector('#typeSpans');
const btnControlLeft = document.querySelector('#rightPart-leftBtn');
const btnControlRight = document.querySelector('#rightPart-rightBtn');
let momentId;

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
            const divSpan = document.querySelector('#typeSpans');
            let spansNode = document.querySelectorAll('#typeSpans span');
            
            pokemonImg.src = data.sprites.front_default;
            pokemonName.textContent = data.name;
            pokemonId.textContent = `no 0${data.id}`;
            pokemonName1.textContent = data.name;
            
            if(spansNode.length != 0) {
                for(let index = 0; index < spansNode.length; ++index) {
                    divSpan.removeChild(divSpan.firstChild)
                };
            };
            
            data.types.forEach(el => {
                const span = document.createElement('span');
                
                span.innerText = el.type.name;
                typeSpans.prepend(span)
            });

            spanHeight.textContent = `${data.height / 10}m`;
            spanWeight.textContent = `${data.weight / 10}kg`;
            console.log(data);
            momentId = data.id;
        })
        .catch(error => console.error(error));

    await fetch(`https://pokeapi.co/api/v2/pokemon-species/${nameOrId}/`)
        .then(result => result.json())
        .then(data => {
            genera.textContent = data.genera[7].genus;
        })
        .catch(error => console.error(error));
};

btnSearch.addEventListener('click', () => {
    if(inputName.value) getPokemon(inputName.value)
    if(inputId.value) getPokemon(inputId.value)
    else alert('Pokémon not found! Name or Id Invalid.');
});

inputId.addEventListener('focus', (event) => {
    event.target.value = '';
    inputName.value = '';
});

inputName.addEventListener('focus', (event) => {
    event.target.value = '';
    inputId.value = '';
});

btnControlLeft.addEventListener('click', () => getPokemon(--momentId));
btnControlRight.addEventListener('click', () => getPokemon(++momentId))
