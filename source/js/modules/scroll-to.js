const features = document.querySelector('.features');
const catalog = document.querySelector('.catalog');
const contacts = document.querySelector('.contacts');
const featuresBtn = document.querySelector('.menu__list-item--features');
const catalogBtn = document.querySelector('.menu__list-item--catalog');
const contactsBtn = document.querySelector('.menu__list-item--contacts');

const scrollTo = (element) => {
  window.scroll({
    left: 0,
    top: element.offsetTop,
    behavior: 'smooth',
  });
};

const scrollToBlock = (btn, block) => {
  if (block) {
    btn.addEventListener('click', () =>{
      scrollTo(block);
    });
  }
};

const scrollOnMenuBtn = () => {
  scrollToBlock(featuresBtn, features);
  scrollToBlock(catalogBtn, catalog);
  scrollToBlock(contactsBtn, contacts);
};

export {scrollOnMenuBtn, scrollToBlock};
