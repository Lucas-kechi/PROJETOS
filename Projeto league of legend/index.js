import { fakeUser } from './fakeUser.js';
const {userName, userPassword} = fakeUser;

const user = document.querySelector("[name=userName]");
const password = document.querySelector("[name=userPassword]");
const loginButton = document.querySelector('[name=loginButton]');
const body = document.querySelector('body');
let newUser;
let newPassword;

function getValueFromInput(event) {
    if(event.currentTarget.type === user.type) {
        newUser = event.currentTarget.value;
    } else if(event.currentTarget.type === password.type) {
        newPassword = event.currentTarget.value;
    };
};
function toggleDisabled() {
    if(newUser && newPassword) {
        loginButton.removeAttribute('disabled')
    } else {
        loginButton.setAttribute('disabled', 'disabled')
    }
};

user.addEventListener('keyup', getValueFromInput);
user.addEventListener('mouseout', toggleDisabled);
password.addEventListener('keyup', getValueFromInput);
password.addEventListener('mouseout', toggleDisabled);

loginButton.addEventListener('click', () => {
    if(newUser === userName && newPassword === userPassword){
        return alert('Você esta logado!')
    } else {
        return alert('Usuário ou senha incorreto')
    };
});
