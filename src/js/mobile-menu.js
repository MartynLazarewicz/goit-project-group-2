const btnHamburger = document.querySelector('#menuHamburger');
const header = document.querySelector('.header');
const menu = document.querySelector('.navigation-mobile');
const hamburgerMenu = document.querySelector('.hamburger-lines');
const body = document.querySelector('body');

btnHamburger.addEventListener('click', function () {
  if (header.classList.contains('open')) {
    // close hamburger

    header.classList.remove('open');
    body.classList.remove('noScroll');
    menu.classList.add('is-hidden--menu');
    hamburgerMenu.classList.remove('hamburgerOpen');
  } else {
    // open hamburger
    header.classList.add('open');
    body.classList.add('noScroll');
    menu.classList.remove('is-hidden--menu');
    hamburgerMenu.classList.add('hamburgerOpen');
  }
});

var element = document.getElementById('#products');
// var toTop = document.getElementById('#top');

element.scrollIntoView(true);
// toTop.scrollIntoView(true);
