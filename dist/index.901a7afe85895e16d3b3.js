/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/main.scss */ \"./src/main.scss\");\n/* harmony import */ var _src_js_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/js/nav */ \"./src/js/nav.js\");\n/* harmony import */ var _src_js_nav__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_js_nav__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_js_mobile_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/js/mobile-menu */ \"./src/js/mobile-menu.js\");\n/* harmony import */ var _src_js_mobile_menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_js_mobile_menu__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_js_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/js/modal */ \"./src/js/modal.js\");\n/* harmony import */ var _src_js_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_src_js_modal__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_js_inputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/js/inputs */ \"./src/js/inputs.js\");\n/* harmony import */ var _src_js_inputs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_src_js_inputs__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_js_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/js/slider */ \"./src/js/slider.js\");\n/* harmony import */ var _src_js_slider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_src_js_slider__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\n//# sourceURL=webpack://webpackbaseconfig/./src/index.js?");

/***/ }),

/***/ "./src/js/inputs.js":
/*!**************************!*\
  !*** ./src/js/inputs.js ***!
  \**************************/
/***/ (() => {

eval("\n\nconst inputDate = document.getElementById('date-books');\nconst booksDate = document.querySelector('.books__date');\nconst booksMonth = document.querySelector('.books__month');\nlet selectedDate = 0;\nlet selectedMonth = '';\nfunction getMonthName(month) {\n  switch (month) {\n    case 0:\n      selectedMonth = 'Января';\n      break;\n    case 1:\n      selectedMonth = 'Февраля';\n      break;\n    case 2:\n      selectedMonth = 'Марта';\n      break;\n    case 3:\n      selectedMonth = 'Апреля';\n      break;\n    case 4:\n      selectedMonth = 'Мая';\n      break;\n    case 5:\n      selectedMonth = 'Июня';\n      break;\n    case 6:\n      selectedMonth = 'Июля';\n      break;\n    case 7:\n      selectedMonth = 'Августа';\n      break;\n    case 8:\n      selectedMonth = 'Сентября';\n      break;\n    case 9:\n      selectedMonth = 'Октября';\n      break;\n    case 10:\n      selectedMonth = 'Ноября';\n      break;\n    case 11:\n      selectedMonth = 'Декабря';\n      break;\n  }\n  return selectedMonth;\n}\ninputDate.addEventListener('change', () => {\n  selectedDate = new Date(inputDate.value).getDate();\n  selectedMonth = getMonthName(new Date(inputDate.value).getMonth());\n  booksDate.innerHTML = selectedDate;\n  booksMonth.innerHTML = selectedMonth;\n});\nlet thumb = document.querySelector('.books__thumb');\nlet slider = document.querySelector('.books__slider');\nslider.addEventListener('pointerdown', function (event) {\n  event.preventDefault();\n});\nthumb.addEventListener('pointerdown', function (event) {\n  event.preventDefault();\n  let shiftX = event.clientX - thumb.getBoundingClientRect().left;\n  document.addEventListener('pointermove', onMouseMove);\n  document.addEventListener('pointerup', onMouseUp);\n  function onMouseMove(event) {\n    let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;\n    if (newLeft < 0) {\n      newLeft = 0;\n    }\n    let rightEdge = slider.offsetWidth - thumb.offsetWidth;\n    if (newLeft > rightEdge) {\n      newLeft = rightEdge;\n    }\n    thumb.style.left = newLeft + 'px';\n  }\n  function onMouseUp() {\n    document.removeEventListener('pointerup', onMouseUp);\n    document.removeEventListener('pointermove', onMouseMove);\n  }\n});\nthumb.addEventListener('dragstart', function () {\n  return false;\n});\nconst chooseBook = document.getElementById('choose-book');\nconst arrow = document.querySelector('.review__icon');\nconst bookList = document.querySelector('.review__options');\nconst books = document.querySelectorAll('.review__option');\nconst bookName = document.querySelector('.review__book');\nconst formReview = document.querySelector('.review');\nchooseBook.addEventListener('click', () => {\n  if (!chooseBook.classList.contains('clicked')) {\n    arrow.style.transform = 'rotate(0)';\n    bookList.style.display = 'block';\n    chooseBook.classList.add('clicked');\n  } else {\n    arrow.style.transform = 'rotate(180deg)';\n    bookList.style.display = 'none';\n    chooseBook.classList.remove('clicked');\n  }\n});\nbooks.forEach(book => {\n  book.addEventListener('click', () => {\n    bookName.innerHTML = book.innerHTML;\n    bookName.style.color = '#202326';\n    arrow.style.transform = 'rotate(180deg)';\n    bookList.style.display = 'none';\n    chooseBook.classList.remove('clicked');\n  });\n});\nformReview.addEventListener('submit', e => {\n  e.preventDefault();\n  e.target.reset();\n  bookName.innerHTML = 'Выберите книгу';\n  bookName.style.color = '#777777';\n});\n\n//# sourceURL=webpack://webpackbaseconfig/./src/js/inputs.js?");

/***/ }),

/***/ "./src/js/mobile-menu.js":
/*!*******************************!*\
  !*** ./src/js/mobile-menu.js ***!
  \*******************************/
/***/ (() => {

eval("\n\nconst openMenuBtn = document.querySelector('.header__btn_mobile');\nconst closeMenuBtn = document.querySelector('#close-mobile');\nconst mobileMenu = document.querySelector('.mobile-menu');\nopenMenuBtn.addEventListener('click', () => {\n  mobileMenu.style.display = 'flex';\n  closeMenuBtn.style.display = 'block';\n  openMenuBtn.style.display = 'none';\n});\ncloseMenuBtn.addEventListener('click', () => {\n  mobileMenu.style.display = 'none';\n  closeMenuBtn.style.display = 'none';\n  openMenuBtn.style.display = 'block';\n});\n\n//# sourceURL=webpack://webpackbaseconfig/./src/js/mobile-menu.js?");

/***/ }),

/***/ "./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/***/ (() => {

eval("\n\nconst openModalBtn = document.getElementById('start-study');\nconst openModalBtnMobile = document.getElementById('start-study-mobile');\nconst closeModalBtn = document.querySelector('.modal__close');\nconst modal = document.querySelector('.modal');\nopenModalBtn.addEventListener('click', () => {\n  modal.style.display = 'block';\n});\nopenModalBtnMobile.addEventListener('click', () => {\n  modal.style.display = 'block';\n});\ncloseModalBtn.addEventListener('click', () => {\n  modal.style.display = 'none';\n});\nwindow.addEventListener('click', event => {\n  if (event.target == modal) {\n    modal.style.display = 'none';\n  }\n});\n\n//# sourceURL=webpack://webpackbaseconfig/./src/js/modal.js?");

/***/ }),

/***/ "./src/js/nav.js":
/*!***********************!*\
  !*** ./src/js/nav.js ***!
  \***********************/
/***/ (() => {

eval("\n\nconst navBtn = document.querySelectorAll('.nav__item.nav__item_btn');\nnavBtn.forEach(btn => {\n  btn.addEventListener('click', () => {\n    if (!btn.classList.contains('nav__btn_active')) {\n      btn.querySelector('.nav__icon_active').style.display = 'flex';\n      btn.querySelector('.nav__icon_inactive').style.display = 'none';\n      btn.closest('.nav__item').querySelector('.nav__sublist').classList.remove('nav__sublist_inactive');\n      btn.closest('.nav__item').querySelector('.nav__link').style.color = '#2D1AA7';\n      btn.classList.add('nav__btn_active');\n    } else {\n      btn.querySelector('.nav__icon_active').style.display = 'none';\n      btn.querySelector('.nav__icon_inactive').style.display = 'flex';\n      btn.closest('.nav__item').querySelector('.nav__sublist').classList.add('nav__sublist_inactive');\n      btn.closest('.nav__item').querySelector('.nav__link').style.color = '#202326';\n      btn.classList.remove('nav__btn_active');\n    }\n  });\n  window.addEventListener('mousedown', event => {\n    if (!btn.contains(event.target)) {\n      btn.closest('.nav__item').querySelector('.nav__sublist').classList.add('nav__sublist_inactive');\n      btn.closest('.nav__item').querySelector('.nav__link').style.color = '#202326';\n      btn.querySelector('.nav__icon_active').style.display = 'none';\n      btn.querySelector('.nav__icon_inactive').style.display = 'flex';\n      btn.classList.remove('nav__btn_active');\n    }\n  });\n});\n\n//# sourceURL=webpack://webpackbaseconfig/./src/js/nav.js?");

/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/***/ (() => {

eval("\n\nconst sliderBtns = document.querySelectorAll('.posts__btn');\nconst posts = document.querySelectorAll('.posts__item');\nconst itemsLength = sliderBtns.length;\nsliderBtns.forEach(btn => {\n  btn.addEventListener('click', () => {\n    for (let i = 0; i < itemsLength; i++) {\n      sliderBtns[i].classList.remove('posts__btn_active');\n      posts[i].classList.add('posts__item_hidden');\n    }\n    btn.classList.add('posts__btn_active');\n    document.getElementById(`post-${btn.id}`).classList.remove('posts__item_hidden');\n  });\n});\n\n//# sourceURL=webpack://webpackbaseconfig/./src/js/slider.js?");

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpackbaseconfig/./src/main.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;