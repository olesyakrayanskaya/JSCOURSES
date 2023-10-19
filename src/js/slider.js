'use strict';

const sliderBtns = document.querySelectorAll('.posts__btn');
const posts = document.querySelectorAll('.posts__item');
const itemsLength = sliderBtns.length;

sliderBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    for (let i = 0; i < itemsLength; i++) {
      sliderBtns[i].classList.remove('posts__btn_active');
      posts[i].classList.add('posts__item_hidden');
    }
    btn.classList.add('posts__btn_active');
    document
      .getElementById(`post-${btn.id}`)
      .classList.remove('posts__item_hidden');
  });
});
