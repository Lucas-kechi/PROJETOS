const spansFromPainel = document.querySelectorAll('#colorsBorder span');
const spansFromGrid = document.querySelectorAll('#grid span');
const grid = document.querySelector('#grid');
const clearGridButton = document.querySelector('button');
const gridInput = document.querySelector('input');
let setColor;
let gridConfig;

spansFromPainel.forEach(el => el.addEventListener('click', (event) => setColor = event.currentTarget.classList.value));

spansFromGrid.forEach(el => el.addEventListener('click', () => el.classList.add(setColor)));

clearGridButton.addEventListener('click', () => spansFromGrid.forEach(el => el.removeAttribute('class')));

gridInput.addEventListener('keyup', (event) => {
    const span = document.createElement('span')

    gridConfig = event.currentTarget.value ** 2;

    if(grid.children.length !== 0) {
        console.log(grid.childNodes)
        grid.childNodes.forEach(el => grid.removeChild('span'));
    };

   grid.prepend(span)

});
