import {createElementsArrow} from '../utils/util';

const body = document.body;
const burger = document.querySelector('.menu__toggle--burger');
const iconClose = document.querySelector('.menu__toggle--icon-close');
const menuItemArrow = document.querySelectorAll('.menu__list-item');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
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

const openMenu = () => {
  burger.style.display = 'none';
  iconClose.style.display = 'block';
  header.classList.add('opened');
  headerMenu.classList.add('opened');
  menuNav.classList.add('opened');
  headerLogo.classList.add('opened');
  mainContainer.style.visibility = 'hidden';
  intro.style.marginTop = '112px';
  overlay.classList.add('opened');
  body.style.overflow = 'hidden';
};

const closeMenu = () => {
  burger.style.display = 'block';
  iconClose.style.display = 'none';
  header.classList.remove('opened');
  headerMenu.classList.remove('opened');
  menuNav.classList.remove('opened');
  headerLogo.classList.remove('opened');
  mainContainer.style.visibility = 'visible';
  intro.style.marginTop = '0';
  overlay.classList.remove('opened');
  body.style.overflow = 'overlay';
};

const onLinkClick = () => {
  createElementsArrow(menuItemArrow).forEach((e) => {
    e.addEventListener('click', () => {
      closeMenu();
    });
  });
};

const onOverlayClick = () => {
  overlay.addEventListener('click', () => {
    closeMenu();
  });
};

const showMenu = () => {
  if (burger && header && headerMenu && menuNav && headerLogo && mainContainer && iconClose && intro) {
    removeClass(createElementsArrow(noJsArrow));

    burger.addEventListener('click', () => {
      openMenu();
    });
  }

  if (iconClose && header && headerMenu && menuNav && burger && headerLogo && mainContainer && iconClose && intro) {
    iconClose.addEventListener('click', () => {
      closeMenu();
    });
  }

  onLinkClick();
  onOverlayClick();
};

export {showMenu};
