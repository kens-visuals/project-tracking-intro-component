const nav = document.querySelector('.js-nav');
const hamburger = document.querySelector('.js-hamburger');
const hamburgerBtn = document.querySelector('.js-hamburger-btn');

hamburgerBtn.addEventListener('click', () => {
  if (!nav.classList.contains('nav--is-open')) {
    nav.classList.add('nav--is-open');
    hamburger.src = './images/icon-close.svg';
    hamburgerBtn.setAttribute('aria-expanded', true);
  } else {
    nav.classList.remove('nav--is-open');
    hamburger.src = './images/icon-hamburger.svg';
    hamburgerBtn.setAttribute('aria-expanded', false);
  }
});
