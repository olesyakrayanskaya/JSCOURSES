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

thumb.onmousedown = function (event) {
  event.preventDefault();
  console.log('ddd')

  let shiftX = event.clientX - thumb.getBoundingClientRect().left;

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);

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
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
  }
};

thumb.ondragstart = function () {
  return false;
};
