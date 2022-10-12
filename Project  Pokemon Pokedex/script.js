const btnAudio = document.querySelector('#btnAudio');
const inputName = document.querySelector('#inputName');
const inputId = document.querySelector('#inputId');
const btnSearch = document.querySelector('#searchBtn');
const typeSpans = document.querySelector('#typeSpans');
const btnControlLeft = document.querySelector('#rightPart-leftBtn');
const btnControlRight = document.querySelector('#rightPart-rightBtn');
const btnNavUp = document.querySelector('#btnNavUp');
const btnNavRight = document.querySelector('#btnNavRight');
const btnNavDown = document.querySelector('#btnNavDown');
const btnNavLeft = document.querySelector('#btnNavLeft');
const defaultImg = 'front_default';
let spritesArray;
let momentId;
let spriteMoment;
let count = 0;

window.onload = () => {
    soundTrack.autoplay = true;
    soundOff.style = 'display: none';

    getPokemon('pikachu', defaultImg);
};

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

function getPokemonImg(data, spriteImg) {
    spriteMoment = spriteImg;
    pokemonImg.src = data.sprites[spriteImg];
}

function pokemonDescription(data) {
    pokemonName.textContent = data.name;
    pokemonId.textContent = `no 0${data.id}`;
    pokemonName1.textContent = data.name;
    spanHeight.textContent = `${data.height / 10}m`;
    spanWeight.textContent = `${data.weight / 10}kg`;
    momentId = data.id;
};

function removeSpan() {
    const divSpan = document.querySelector('#typeSpans');
    let spansNode = document.querySelectorAll('#typeSpans span');

    if(spansNode.length != 0) {
        for(let index = 0; index < spansNode.length; ++index) {
            divSpan.removeChild(divSpan.firstChild)
        };
    };
};

function addSpan(data) {
    data.types.forEach(el => {
        const span = document.createElement('span');
       
        span.innerText = el.type.name;
        typeSpans.prepend(span)
    });
};

function navControls(data) {
    spritesArray = Object.keys(data.sprites);
    spritesArray.splice(0, 4);  
    spritesArray.splice(4, 6);
    count = 0;
    console.log(spritesArray)

    btnNavUp.addEventListener('click', () => {
        count++;

        if(count > 3) {
            count = 0;
            getPokemonImg(data, spritesArray[count]);
        } if(data.sprites[spritesArray[count]]) getPokemonImg(data, spritesArray[count])
        else {
            count++;
            getPokemonImg(data, spritesArray[count]);
        };
    });
};

async function pokemonGenera(nameOrId) {
    await fetch(`https://pokeapi.co/api/v2/pokemon-species/${nameOrId}/`)
    .then(result => result.json())
    .then(data => {
        genera.textContent = data.genera[7].genus;
    })
    .catch(err => console.error(err));
};

async function getPokemon(nameOrId, spriteImg) {
    const api = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId}/`);
    const data = await api.json();

    navControls(data);
    getPokemonImg(data, spriteImg);
    pokemonDescription(data);
    removeSpan();
    addSpan(data);           
    pokemonGenera(nameOrId);
};

btnSearch.addEventListener('click', () => {
    if(inputName.value) getPokemon(inputName.value, defaultImg)
    else if(inputId.value) getPokemon(inputId.value, defaultImg)
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

btnControlLeft.addEventListener('click', () => getPokemon(--momentId, defaultImg));
btnControlRight.addEventListener('click', () => getPokemon(++momentId, defaultImg));
