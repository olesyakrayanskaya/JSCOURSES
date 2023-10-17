'use strict';

const openModalBtn = document.getElementById('start-study');
const openModalBtnMobile = document.getElementById('start-study-mobile');
const closeModalBtn = document.querySelector('.modal__close');
const modal = document.querySelector('.modal');

openModalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

openModalBtnMobile.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});
