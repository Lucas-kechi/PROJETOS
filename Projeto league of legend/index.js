import { fakeUser } from './fakeUser.js';
import {user, password, loginButton, logo, facebookButton, googleButton, appleButton, keepLogin, loggedUser, modalBlock, canNotLogin, closeButton, 
    recoverEmail, buttonRecoverEmail, modalContent, modalMakeCount, makeCount, closeButtonMakeCount} from './screenElement.js';

const {userName, userPassword} = fakeUser;

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

logo.addEventListener('click', () => document.location.assign('https://www.leagueoflegends.com/pt-br/'));
facebookButton.addEventListener('click', () => document.location.assign('https://www.facebook.com'));
googleButton.addEventListener('click', () => document.location.assign('https://accounts.google.com/'));
appleButton.addEventListener('click', () => document.location.assign('https://appleid.apple.com/'));

keepLogin.addEventListener('click', (event) => {
    if(event.target.checked) {
        localStorage.setItem('user', JSON.stringify(loggedUser));
    } else {
        localStorage.removeItem('user')
    }
});

canNotLogin.addEventListener('click', () => modalBlock.setAttribute('style', 'display: flex'));

closeButton.addEventListener('click', () => {
    modalBlock.setAttribute('style', 'display: none');
    if(modalContent.children.length === 3) {
        modalContent.lastChild.remove();
        modalContent.childNodes.forEach(el => el.nodeName != '#text' && el.setAttribute('style', 'display: flex'));
        recoverEmail.value = '';
        buttonRecoverEmail.setAttribute('disabled', '');
        buttonRecoverEmail.classList.remove('active-button');
    }
});

recoverEmail.addEventListener('keyup', (event) => {
    if(event.currentTarget.value.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/g)) {
        buttonRecoverEmail.removeAttribute('disabled');
        buttonRecoverEmail.classList.add('active-button');
    } else {
        buttonRecoverEmail.setAttribute('disabled', '');
        buttonRecoverEmail.classList.remove('active-button');
    }
});

buttonRecoverEmail.addEventListener('click', () => {
    const h5 = document.createElement('h5');
    

    h5.setAttribute('id', 'modal-text');
    h5.setAttribute('style', 'margin-top: 20%');
    h5.innerText = 'Email com nova senha enviado!';

    modalContent.childNodes.forEach(el => el.nodeName != '#text' && el.setAttribute('style', 'display: none'));
    modalContent.append(h5);
});

makeCount.addEventListener('click', () => modalMakeCount.setAttribute('style', 'display: flex'));
closeButtonMakeCount.addEventListener('click', () => modalMakeCount.setAttribute('style', 'display: none'));
