import {createElementsArrow} from '../utils/util';

const burger = document.querySelector('.menu__toggle--burger');
const iconClose = document.querySelector('.menu__toggle--icon-close');
const header = document.querySelector('.header');
const headerMenu = document.querySelector('.header__menu');
const headerLogo = document.querySelector('.header__logo');
const menuNav = document.querySelector('.menu__nav');
const mainContainer = document.querySelector('.main__container');
const intro = document.querySelector('.intro');
const noJsArrow = document.querySelectorAll('.no-js');

const removeClass = (arr) => {
  arr.forEach((e) => {
    e.classList.remove('no-js');
  });
};

const showMenu = () => {
  if (burger && header && headerMenu && menuNav && headerLogo & mainContainer && iconClose && intro) {
    removeClass(createElementsArrow(noJsArrow));

    burger.addEventListener('click', () => {
      header.classList.add('opened');
      headerMenu.classList.add('opened');
      menuNav.classList.add('opened');
      headerLogo.classList.add('opened');
      burger.style.display = 'none';
      mainContainer.style.visibility = 'hidden';
      iconClose.style.display = 'block';
      intro.style.marginTop = '112px';
    });
  }

  if (iconClose && header && headerMenu && menuNav && burger && headerLogo && mainContainer && intro) {
    iconClose.addEventListener('click', () => {
      header.classList.remove('opened');
      headerMenu.classList.remove('opened');
      menuNav.classList.remove('opened');
      burger.style.display = 'block';
      headerLogo.classList.remove('opened');
      mainContainer.style.visibility = 'visible';
      iconClose.style.display = 'none';
      intro.style.marginTop = '0';
    });
  }
};

export {showMenu};
