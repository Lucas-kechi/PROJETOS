const user = document.querySelector("[name=userName]");
const password = document.querySelector("[name=userPassword]");
const loginButton = document.querySelector('[name=loginButton]');
const logo = document.querySelector('#logoSection');
const facebookButton = document.querySelector('#facebookButton');
const googleButton = document.querySelector('#googleButton');
const appleButton = document.querySelector('#appleButton');
const keepLogin = document.querySelector('#checkbox');
const modalBlock = document.querySelector('#modal-section-can-not-login');
const canNotLogin = document.querySelector('#canNotLogin');
const closeButton = document.querySelector('#close-button-can-not-login');
const recoverEmail = document.querySelector('#modal-content form input');
const buttonRecoverEmail = document.querySelector('#send-button-can-not-login');
const modalContent = document.querySelector('#modal-content');
const modalMakeCount = document.querySelector('#modal-section-make-account');
const makeCount = document.querySelector('#make-account');
const closeButtonMakeCount = document.querySelector('#close-button-make-account')
const loggedUser = {
    newUser: '',
    newPassword: ''
};

export {user, password, loginButton, logo, facebookButton, googleButton, appleButton, keepLogin, loggedUser, 
    modalBlock, canNotLogin, closeButton, recoverEmail, buttonRecoverEmail, modalContent, modalMakeCount, makeCount, closeButtonMakeCount};
