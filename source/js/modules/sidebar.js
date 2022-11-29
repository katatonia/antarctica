import {createElementsArrow} from '../utils/util';

const header = document.querySelector('header');
const headerContainer = header.querySelector('.header__container');
const burger = header.querySelector('.menu__toggle');
const sidebar = document.querySelector('.sidebar');
const aside = sidebar.querySelector('.sidebar__aside');
const iconClose = sidebar.querySelector('.sidebar__toggle');
const mainContainer = document.querySelector('.main__container');
const noJsArrow = document.querySelectorAll('.no-js');

const removeClass = (arr) => {
  arr.forEach((e) => {
    e.classList.remove('no-js');
  });
};

const showSidebar = () => {
  if (burger) {
    removeClass(createElementsArrow(noJsArrow));

    burger.addEventListener('click', () => {
      sidebar.classList.add('active');
      aside.classList.add('active');

      headerContainer.style.visibility = 'hidden';
      mainContainer.style.visibility = 'hidden';
    });
  }

  if (iconClose) {
    iconClose.addEventListener('click', () => {
      sidebar.classList.remove('active');
      aside.classList.remove('active');
      headerContainer.style.visibility = 'visible';
      mainContainer.style.visibility = 'visible';
    });
  }
};

export {showSidebar};
