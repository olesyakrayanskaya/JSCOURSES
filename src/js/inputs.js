'use strict';

const inputDate = document.getElementById('date-books');
const booksDate = document.querySelector('.books__date');
const booksMonth = document.querySelector('.books__month');
let selectedDate = 0;
let selectedMonth = '';

function getMonthName(month) {
  switch (month) {
    case 0:
      selectedMonth = 'Января';
      break;
    case 1:
      selectedMonth = 'Февраля';
      break;
    case 2:
      selectedMonth = 'Марта';
      break;
    case 3:
      selectedMonth = 'Апреля';
      break;
    case 4:
      selectedMonth = 'Мая';
      break;
    case 5:
      selectedMonth = 'Июня';
      break;
    case 6:
      selectedMonth = 'Июля';
      break;
    case 7:
      selectedMonth = 'Августа';
      break;
    case 8:
      selectedMonth = 'Сентября';
      break;
    case 9:
      selectedMonth = 'Октября';
      break;
    case 10:
      selectedMonth = 'Ноября';
      break;
    case 11:
      selectedMonth = 'Декабря';
      break;
  }
  return selectedMonth;
}

inputDate.addEventListener('change', () => {
  selectedDate = new Date(inputDate.value).getDate();
  selectedMonth = getMonthName(new Date(inputDate.value).getMonth());
  booksDate.innerHTML = selectedDate;
  booksMonth.innerHTML = selectedMonth;
});

let thumb = document.querySelector('.books__thumb');
let slider = document.querySelector('.books__slider');

slider.addEventListener('pointerdown', function (event) {
  event.preventDefault();
});

thumb.addEventListener('pointerdown', function (event) {
  event.preventDefault();

  let shiftX = event.clientX - thumb.getBoundingClientRect().left;

  document.addEventListener('pointermove', onMouseMove);
  document.addEventListener('pointerup', onMouseUp);

  function onMouseMove(event) {
    let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;

    if (newLeft < 0) {
      newLeft = 0;
    }
    let rightEdge = slider.offsetWidth - thumb.offsetWidth;
    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }

    thumb.style.left = newLeft + 'px';
  }

  function onMouseUp() {
    document.removeEventListener('pointerup', onMouseUp);
    document.removeEventListener('pointermove', onMouseMove);
  }
});

thumb.addEventListener('dragstart', function () {
  return false;
});
