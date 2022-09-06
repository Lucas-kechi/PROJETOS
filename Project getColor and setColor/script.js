const spansFromPainel = document.querySelectorAll('#colorsBorder span');
const spansFromGrid = document.querySelectorAll('#grid span');
const grid = document.querySelector('#grid');
const painel = document.querySelector('#colorsBorder')
const clearGridButton = document.querySelector('button');
const gridInput = document.querySelector('#dimensionInput');
const buttonSetSpanFromPainel = document.querySelector('#colorsBorder button')
let setColor;
let gridConfig;

spansFromPainel.forEach(el => el.addEventListener('click', (event) => setColor = event.currentTarget.classList.value));

spansFromGrid.forEach(el => el.addEventListener('click', () => el.classList.add(setColor)));

clearGridButton.addEventListener('click', () => spansFromGrid.forEach(el => el.removeAttribute('class')));

gridInput.addEventListener('keyup', (event) => {
    
});

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
    });
});