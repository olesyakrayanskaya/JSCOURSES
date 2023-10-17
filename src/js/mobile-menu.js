'use strict';

const openMenuBtn = document.querySelector('.header__btn_mobile');
const closeMenuBtn = document.querySelector('#close-mobile');
const mobileMenu = document.querySelector('.mobile-menu');

openMenuBtn.addEventListener('click', () => {
  mobileMenu.style.display = 'flex';
  closeMenuBtn.style.display = 'block';
  openMenuBtn.style.display = 'none';
});

closeMenuBtn.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
  closeMenuBtn.style.display = 'none';
  openMenuBtn.style.display = 'block';
});
