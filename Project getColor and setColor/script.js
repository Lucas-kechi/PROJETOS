const grid = document.querySelector('#grid');
const painel = document.querySelector('#colorsBorder');
const clearGridButton = document.querySelector('#buttonClearColorGrid');
const gridInput = document.querySelector('#dimensionInput');
const buttonSetSpanFromPainel = document.querySelector('#colorsBorder button');
const buttonConfigGrid = document.querySelector('#enterGrid');
let flexBasisValue;
let spansFromGrid = document.querySelectorAll('#grid span');
let spansFromPainel = document.querySelectorAll('#colorsBorder span');
let setColor = 'background-color: #000000';
let gridConfig;

buttonSetSpanFromPainel.addEventListener('click', () => {
    const inputColor = document.createElement('input');
    
    inputColor.setAttribute('type', 'color');
    inputColor.setAttribute('style', 'margin-top: 3rem');
    painel.append(inputColor);

    inputColor.addEventListener('mouseleave', (event) => {
        const span = document.createElement('span');
        
        span.setAttribute('style', `background-color: ${inputColor.value}`);
        painel.insertBefore(span, buttonSetSpanFromPainel);
        painel.removeChild(painel.lastElementChild);
        spansFromPainel = document.querySelectorAll('#colorsBorder span')
        
        spansFromPainel.forEach(el => el.addEventListener('click', (event) => setColor = el.getAttribute('style')));
    });
});

clearGridButton.addEventListener('click', () => {
    spansFromGrid.forEach(el => el.setAttribute('style', `flex-basis: ${flexBasisValue}px; background-color: #ffffff;`));

    setColor = 'background-color: #000000';
});

gridInput.addEventListener('keyup', (event) => {
    if(event.currentTarget.value ){
        buttonConfigGrid.removeAttribute('disabled') ;
    } else {
        buttonConfigGrid.setAttribute('disabled', 'disabled');

        for(let repeat = 0; repeat < gridConfig; ++repeat) {
            grid.removeChild(grid.firstChild);
        };
    };
});

buttonConfigGrid.addEventListener('click', () => {
    flexBasisValue = 1450 / gridInput.value;

    gridConfig = gridInput.value **2;

    for(let repeat = 0; repeat < gridConfig; ++repeat) {
        grid.prepend(document.createElement('span'));
    };

    spansFromGrid = document.querySelectorAll('#grid span');
    spansFromGrid.forEach(el => el.addEventListener('click', () => el.setAttribute('style', `flex-basis: ${flexBasisValue}px; ${setColor}` )));
    spansFromGrid.forEach(el => el.setAttribute('style', `flex-basis: ${flexBasisValue}px`));
});