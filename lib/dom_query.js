/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const DOMNodeCollection = __webpack_require__(1);

function $l(selector) {
  let NodeList = document.querySelectorAll(selector);

  if (selector instanceof HTMLElement) {
    arr = Array.from(NodeList);
    return new DOMNodeCollection(arr);
  }
}

window.$l = $l;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

class DOMNodeCollection {
  constructor(arr) {
    this.arr = arr;
  }

  html(string) {
    if (string) {
      this.arr.forEach( el => {
        el.innerHTML = string;
      });
    } else {
      return this.arr[0].innerHTML;
    }
  }

  empty() {
    this.arr.forEach( el => {
      el.innerHTML = "";
    });
  }

  append(newElement) {
    this.arr.forEach( innerElement => {
      innerElement.innerHTML += newElement;
    });
  }

  attr(attrName, value) {
    this.arr.forEach( el => {
      el.setAttribute(attrName, value);
    });
  }

  addClass(className) {
    this.arr.forEach( el => {
      el.classList.add(className);
    });
  }

  removeClass(className) {
    this.arr.forEach( el => {
      el.classList.remove(className);
    });
  }

  children() {
    let allChildren = [];
    this.arr.forEach( el => {
      allChildren = allChildren.concat(el.children);
    });

    return new DOMNodeCollection(allChildren);
  }

  parent() {
    let allParents = [];
    this.arr.forEach( el => {
      allParents = allParents.concat(el.parentNode);
    });

    return new DOMNodeCollection(allParents);
  }

  find(selector) {
    let allSelectors = [];
    this.arr.forEach( el => {
      allSelectors = allSelectors.concat(el.querySelectorAll(selector));
    });

    return new DOMNodeCollection(allSelectors);
  }

  remove(selector) {
    if (!selector) {
      this.arr.forEach( el => {
        el.parentNode.removeChild(el);
      });
    } else {
      this.find(selector).remove();
    }
  }

  on(type, listener) {
    this.arr.forEach( el => {
      el.addEventListener(type, listener);
      el.func = listener;
    });
  }

  off(type) {
    this.arr.forEach( el => {
      el.removeEventListener(type, el.func);
    });
  }

}

module.exports = DOMNodeCollection;


/***/ })
/******/ ]);