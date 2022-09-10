import { fakeUser } from './fakeUser.js';
const {userName, userPassword} = fakeUser;
import {user, password, loginButton, logo, facebookButton, googleButton, appleButton, keepLogin, loggedUser, modalBlock, canNotLogin, closeButton} from './screenElement.js';

window.onload = () => {
    let savedUser = JSON.parse(localStorage.getItem('user'));
    
    if(savedUser) {
        user.value = savedUser.newUser;
        password.value = savedUser.newPassword;
        keepLogin.checked = true;
        Object.assign(loggedUser, savedUser);
        toggleDisabled();
    };

};

function getValueFromInput(event) {
    if(event.currentTarget.type === user.type) {
        loggedUser.newUser = event.currentTarget.value;
    } else if(event.currentTarget.type === password.type) {
        loggedUser.newPassword = event.currentTarget.value;
    };
};

function toggleDisabled() {
    if(loggedUser.newUser && loggedUser.newPassword) {
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
    if(loggedUser.newUser === userName && loggedUser.newPassword === userPassword){
        return alert('Você esta logado!')
    } else {
        return alert('Usuário ou senha incorreto')
    };
});

logo.addEventListener('click', () => document.location.assign('https://www.leagueoflegends.com/pt-br/'))
facebookButton.addEventListener('click', () => document.location.assign('https://www.facebook.com'))
googleButton.addEventListener('click', () => document.location.assign('https://accounts.google.com/'))
appleButton.addEventListener('click', () => document.location.assign('https://appleid.apple.com/'))

keepLogin.addEventListener('click', (event) => {
    if(event.target.checked) {
        localStorage.setItem('user', JSON.stringify(loggedUser));
    } else {
        localStorage.removeItem('user')
    }
});

canNotLogin.addEventListener('click', () => modalBlock.setAttribute('style', 'display: flex'));
closeButton.addEventListener('click', () => modalBlock.setAttribute('style', 'display: none'));
