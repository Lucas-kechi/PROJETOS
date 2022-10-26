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
const navBtnsFilter = document.querySelectorAll('.pokedexRightPart__filter button');
const defaultImg = 'front_default';
const typesImg = [
    typeNormalImg,
    typeFightingImg,
    typeFlyingImg,
    typePoisonImg,
    typeGroundImg,
    typeRockImg,
    typeBugImg,
    typeGhostImg,
    typeSteelImg,
    typeFireImg,
    typeWaterImg,
    typeGrassImg,
    typeElectricImg,
    typePsychicImg,
    typeIceImg,
    typeDragonImg,
    typeDarkImg,
    typeFairyImg
];
let pokemonFilter = [];
let api;
let momentId;
let spriteMoment;
let frontSprites;
let index = 4;
let spriteDirection = 'front';
let filterIndex = 0;

window.onload = async () => {
    soundTrack.autoplay = true;
    soundOff.style = 'display: none';

    getPokemon(defaultImg);
    const pokemons = await fetch('https://pokeapi.co/api/v2/pokemon/').then(response => response.json());
    const firstPokemon = await fetch('https://pokeapi.co/api/v2/pokemon/1').then(response => response.json());
};

async function getApi(idOrName) {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${idOrName}/`);
    return await pokemon.json();
}

api = getApi('pikachu');

async function getPokemonImg(spriteImg) {
    pokemonImg.srv = '';

    await api
        .then(data => {
            pokemonImg.src = data.sprites[spriteImg];
        })
        .catch(err => console.error(err));
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

function navControlUp(count, frontSprites) {
    console.log('start')
    count++;
    
    if(!frontSprites[count]) count++;
    if(count > frontSprites.length) count = 0;
    
    console.log(count)
    pokemonImg.srv = '';
    pokemonImg.src = frontSprites[count];
}

async function pokemonGenera(nameOrId) {
    await fetch(`https://pokeapi.co/api/v2/pokemon-species/${nameOrId}/`)
    .then(result => result.json())
    .then(data => {
        genera.textContent = data.genera[7].genus;
    })
    .catch(err => console.error(err));
};

async function getPokemon(spriteImg) {
    apiLoad.setAttribute('style', 'background-color: rgba(255, 255, 0, 0.5)');

    await api
        .then(data => {
            getPokemonImg(spriteImg);
            pokemonDescription(data);
            removeSpan();
            addSpan(data);           
            pokemonGenera(data.name);
        })
        .catch(err => console.error(err))
        .finally(() => setTimeout(() => apiLoad.setAttribute('style', 'background-color: rgba(0, 255, 0, 0.5)'), 500));
};

async function filterType(id) {
    await fetch(`https://pokeapi.co/api/v2/type/${id}/`)
        .then(response => response.json())
        .then(data => {
            const arrayData = data.pokemon.map(el => el.pokemon.name);
            pokemonFilter = pokemonFilter.concat(arrayData);
            api = getApi(arrayData[filterIndex = 0]);
            getPokemon(defaultImg);
        })
        .catch(err => console.error(err));
};

function filterButton(referenceButton, typeId1, typeId2, imgId1, imgId2) {
    if(referenceButton.value == 1) {
        referenceButton.setAttribute('style', 'background-color: rgba(0, 0, 255, 0.4)');
        imgId1.setAttribute('style', 'display: none');
        imgId2.setAttribute('style', 'display: show');
        filterType(typeId2)
        referenceButton.value++;
    } else if (referenceButton.value == 2 ) {
        referenceButton.setAttribute('style', 'background-color: transparent');
        imgId1.setAttribute('style', 'display: show');
        imgId2.setAttribute('style', 'display: show');
        referenceButton.value = 0;
        pokemonFilter = []
    } else {
        referenceButton.setAttribute('style', 'background-color: rgba(0, 255, 0, 0.4)');
        imgId2.setAttribute('style', 'display: none');
        filterType(typeId1)
        referenceButton.value = 1;
    };
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

btnSearch.addEventListener('click', () => {
    if(inputName.value) {
        api = getApi(inputName.value);
        getPokemon(defaultImg);
    } else if(inputId.value) {
        api = getApi(inputId.value);
        getPokemon(defaultImg);
    } else alert('Pokémon not found! Name or Id Invalid.');
});

inputId.addEventListener('focus', (event) => {
    event.target.value = '';
    inputName.value = '';
});

inputName.addEventListener('focus', (event) => {
    event.target.value = '';
    inputId.value = '';
});

btnControlLeft.addEventListener('click', () => {
    if(pokemonFilter.length != 0) {
        api = filterIndex === 0 ? getApi(pokemonFilter[filterIndex = pokemonFilter.length - 1]) : getApi(pokemonFilter[--filterIndex]);
        getPokemon(defaultImg);
        spriteDirection = 'front';
    } else {
        api = getApi(--momentId);
        getPokemon(defaultImg);
        spriteDirection = 'front';
    }
});
btnControlRight.addEventListener('click', () => {
    if(pokemonFilter.length != 0) {
        api = filterIndex === pokemonFilter.length - 1 ? getApi(pokemonFilter[filterIndex = 0]) : getApi(pokemonFilter[++filterIndex]);
        getPokemon(defaultImg);
        spriteDirection = 'front';
    } else {
        api = getApi(++momentId);
        getPokemon(defaultImg);
        spriteDirection = 'front';
    }
});

btnNavUp.addEventListener('click', async () => {
    let arraySpritesKeys;
    let arraySpritesValues;

    index++;

    await api
        .then(data => {
            arraySpritesKeys = Object.keys(data.sprites);
            arraySpritesValues = Object.values(data.sprites);
            arraySpritesKeys = arraySpritesKeys.map(el => el.split('_').splice(1, 3).join('_'));

            if(index === 8) index = 4;
            if(arraySpritesValues[index]) getPokemonImg(`${spriteDirection}_${arraySpritesKeys[index]}`)
            else if (arraySpritesValues[++index]) index === 8 ? getPokemonImg(`${spriteDirection}_${arraySpritesKeys[index = 4]}`) : getPokemonImg(`${spriteDirection}_${arraySpritesKeys[index]}`);
        })
        .catch(err => console.error(err));
});

btnNavDown.addEventListener('click', async () => {
    let arraySpritesKeys;
    let arraySpritesValues;

    index--;

    await api
        .then(data => {
            arraySpritesKeys = Object.keys(data.sprites);
            arraySpritesValues = Object.values(data.sprites);
            arraySpritesKeys = arraySpritesKeys.map(el => el.split('_').splice(1, 3).join('_'));

            if(index === 3) index = 7;
            if(arraySpritesValues[index]) getPokemonImg(`${spriteDirection}_${arraySpritesKeys[index]}`)
            else if (arraySpritesValues[--index]) index === 3 ? getPokemonImg(`${spriteDirection}_${arraySpritesKeys[index = 7]}`) : getPokemonImg(`${spriteDirection}_${arraySpritesKeys[index]}`);
        })
        .catch(err => console.error(err));
});

btnNavLeft.addEventListener('click', () => {
    if(spriteDirection === 'back') {
        spriteDirection = 'front'
        index = 4;
        getPokemonImg('front_default');
    } else {
        spriteDirection = 'back';
        index = 4;
        getPokemonImg('back_default');
    }
});

btnNavRight.addEventListener('click', () => {
    if(spriteDirection === 'front') {
        spriteDirection = 'back';
        index = 4;
        getPokemonImg('back_default');
    } else {
        spriteDirection = 'front'
        index = 4;
        getPokemonImg('front_default');
    }
});

navBtnsFilter.forEach(el => {
    el.addEventListener('click', () => {
        if(el.classList.contains('pokedexRightPart__button1')) filterButton(el, 1, 2, typesImg[0], typesImg[1])
        else if(el.classList.contains('pokedexRightPart__button2')) filterButton(el, 3, 4, typesImg[2], typesImg[3])
        else if(el.classList.contains('pokedexRightPart__button3')) filterButton(el, 5, 6, typesImg[4], typesImg[5])
        else if(el.classList.contains('pokedexRightPart__button4')) filterButton(el, 7, 8, typesImg[6], typesImg[7])
        else if(el.classList.contains('pokedexRightPart__button5')) filterButton(el, 9, 10, typesImg[8], typesImg[9])
        else if(el.classList.contains('pokedexRightPart__button6')) filterButton(el, 11, 12, typesImg[10], typesImg[11])
        else if(el.classList.contains('pokedexRightPart__button7')) filterButton(el, 13, 14, typesImg[12], typesImg[13])
        else if(el.classList.contains('pokedexRightPart__button8')) filterButton(el, 15, 16, typesImg[14], typesImg[15])
        else if(el.classList.contains('pokedexRightPart__button9')) filterButton(el, 17, 18, typesImg[16], typesImg[17]);
    });
})
