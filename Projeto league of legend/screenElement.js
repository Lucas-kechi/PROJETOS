const user = document.querySelector("[name=userName]");
const password = document.querySelector("[name=userPassword]");
const loginButton = document.querySelector('[name=loginButton]');
const logo = document.querySelector('#logoSection');
const facebookButton = document.querySelector('#facebookButton');
const googleButton = document.querySelector('#googleButton');
const appleButton = document.querySelector('#appleButton');
const keepLogin = document.querySelector('#checkbox');
const modalBlock = document.querySelector('#modal-section');
const canNotLogin = document.querySelector('#canNotLogin');
const closeButton = document.querySelector('#close-button');
const loggedUser = {
    newUser: '',
    newPassword: ''
};

export {user, password, loginButton, logo, facebookButton, googleButton, appleButton, keepLogin, loggedUser, modalBlock, canNotLogin, closeButton};