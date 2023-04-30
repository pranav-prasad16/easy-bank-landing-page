const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
let menu = document.querySelector('.menu');

//to fix ->
// 1. menu button so it shows renders the image properly after clicking it
// 2. add and remove the "Request Invite button" in the navbar in accordance with screensize

navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav--visible');
    changeImage_To_close();
})

function changeImage_To_close() {
    menu.innerHTML = `
    <img src = 'images/icon-close.svg' alt = "close button">`;
    navToggle.addEventListener('click', changeImage_To_default);
}

function changeImage_To_default() {
    menu.innerHTML = `
    <img src = 'images/icon-hamburger.svg' alt = "menu button">`;

}