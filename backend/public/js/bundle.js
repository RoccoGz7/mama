/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/service/ProyectService.js":
/*!********************************************!*\
  !*** ./frontend/service/ProyectService.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

class ProyectService {

    constructor() {
        this.URI = 'https://localhost:4000/api/proyects';
    }

    async getProyects() {
        const response = await fetch(this.URI);
        return await response.json();
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProyectService);

/***/ }),

/***/ "./frontend/style/index.css":
/*!**********************************!*\
  !*** ./frontend/style/index.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./frontend/style/normalize.css":
/*!**************************************!*\
  !*** ./frontend/style/normalize.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./frontend/app.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/normalize.css */ "./frontend/style/normalize.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/index.css */ "./frontend/style/index.css");
/* harmony import */ var _service_ProyectService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/ProyectService */ "./frontend/service/ProyectService.js");





const proyectService = new _service_ProyectService__WEBPACK_IMPORTED_MODULE_2__["default"]();

document.addEventListener('DOMContentLoaded', () => {
    console.log('Hola Mundo');
});

const inputProyect = document.getElementById('searchProyect');

inputProyect.addEventListener('keyup', (e) => {
    const proyectName = inputProyect.value;
    renderProyects();
});

function createProyectItem(proyectName) {
    return `<li> ${proyectName} </li>`;
}

function renderProyect(proyectName) {
    const containerProyects = document.getElementById('proyects');
    containerProyects.innerHTML += createProyectItem(proyectName);
}

async function renderProyects() {
    // const proyects = await proyectService.getProyects();
    const proyects = [{nombre: 'un proyecto'}, {nombre: 'otro proyecto'}];
    
    proyects.forEach(proyect => {
        renderProyect(proyect.nombre);
    });
}


})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map