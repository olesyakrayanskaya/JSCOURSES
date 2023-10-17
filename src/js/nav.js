'use strict';

const navBtn = document.querySelectorAll('.nav__btn');

navBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (!btn.classList.contains('nav__btn_active')) {
      btn.querySelector('.nav__icon_active').style.display = 'flex';
      btn.querySelector('.nav__icon_inactive').style.display = 'none';
      btn
        .closest('.nav__item')
        .querySelector('.nav__sublist')
        .classList.remove('nav__sublist_inactive');
      btn.closest('.nav__item').querySelector('.nav__link').style.color =
        '#2D1AA7';
      btn.classList.add('nav__btn_active');
    } else {
      btn.querySelector('.nav__icon_active').style.display = 'none';
      btn.querySelector('.nav__icon_inactive').style.display = 'flex';
      btn
        .closest('.nav__item')
        .querySelector('.nav__sublist')
        .classList.add('nav__sublist_inactive');
      btn.closest('.nav__item').querySelector('.nav__link').style.color =
        '#202326';
      btn.classList.remove('nav__btn_active');
    }
  });
});
