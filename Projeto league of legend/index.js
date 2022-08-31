import { fakeUser } from './fakeUser.js';
const {userName, userPassword} = fakeUser;

const user = document.querySelector("[name=userName]");
const password = document.querySelector("[name=userPassword]");
const loginButton = document.querySelector('[name=loginButton]');
const logo = document.querySelector('#logoSection');
const facebookButton = document.querySelector('#facebookButton')
const googleButton = document.querySelector('#googleButton')
const appleButton = document.querySelector('#appleButton')
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
        loginButton.removeAttribute('disabled');
        loginButton.classList.add('active-button')
    } else {
        loginButton.setAttribute('disabled', 'disabled');
        loginButton.classList.remove("active-button")
    }
};

user.addEventListener('keyup', (event) => {
    getValueFromInput(event); 
    toggleDisabled();
});

password.addEventListener('keyup', (event) => {
    getValueFromInput(event);
    toggleDisabled();
});

loginButton.addEventListener('click', () => {
    if(newUser === userName && newPassword === userPassword){
        return alert('Você esta logado!')
    } else {
        return alert('Usuário ou senha incorreto')
    };
});

logo.addEventListener('click', () => document.location.assign('https://www.leagueoflegends.com/pt-br/'))
facebookButton.addEventListener('click', () => document.location.assign('https://www.facebook.com'))
googleButton.addEventListener('click', () => document.location.assign('https://accounts.google.com/'))
appleButton.addEventListener('click', () => document.location.assign('https://appleid.apple.com/'))

