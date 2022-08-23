const body = document.querySelector('body');
const button = body.querySelector('button');
const div = body.querySelector('div');

button.addEventListener('click', deleteClassFromDiv);

function deleteClassFromDiv() {
    div.classList.remove('invisible');
    button.classList.add('invisible');
};

body.addEventListener('keydown', back);

function back(event) {
    if(event.key === 'Escape'){
        button.classList.remove('invisible');
        div.classList.add('invisible');
    };
};