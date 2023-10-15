/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/js/burble.js":
/*!*******************************!*\
  !*** ./frontend/js/burble.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   burble: () => (/* binding */ burble)
/* harmony export */ });
const burble = {
  particles: {
    number: {
      value: 120,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#4b6584",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.8,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 4,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
}

/***/ }),

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
        this.URI = 'http://localhost:4000/api/proyects';
    }

    async getProyects() {
        const response = await fetch(this.URI);
        return await response.json();
    }

    async postProyect(project) {
        await fetch(this.URI, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        })
    }

    async deleteProyect(id) {
        await fetch(this.URI, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id })
        })
    }

    async approvedProject(id) {
        await fetch(this.URI, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id })
        })
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

/***/ "./frontend/style/indexMin.css":
/*!*************************************!*\
  !*** ./frontend/style/indexMin.css ***!
  \*************************************/
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
/* harmony import */ var _style_indexMin_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style/indexMin.css */ "./frontend/style/indexMin.css");
/* harmony import */ var _service_ProyectService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/ProyectService */ "./frontend/service/ProyectService.js");
/* harmony import */ var _js_burble__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/burble */ "./frontend/js/burble.js");







particlesJS(_js_burble__WEBPACK_IMPORTED_MODULE_4__.burble)

const proyectService = new _service_ProyectService__WEBPACK_IMPORTED_MODULE_3__["default"]();

document.addEventListener("DOMContentLoaded", async () => {
  changeSearchPage(await proyectService.getProyects());
});

function changeSearchPage(proyects) {
  renderProyects(proyects);
  const inputProyect = document.getElementById("searchProyect");

  inputProyect.addEventListener("focus", () => {
    const searchIcon = document.getElementById("searchIcon");
    searchIcon.className = "fa-solid fa-magnifying-glass fa-bounce";
  });

  inputProyect.addEventListener("focusout", () => {
    const searchIcon = document.getElementById("searchIcon");
    searchIcon.className = "fa-solid fa-magnifying-glass";
  });

  inputProyect.addEventListener("keyup", (e) => {
    const newProyects = proyects.filter((proyects) => {
      return proyects.nombre
        .toLowerCase()
        .includes(inputProyect.value.toLowerCase());
    });
    renderProyects(newProyects);
  });
}

function createProyectItem(proyect) {
  const proyectNode = document.createElement("li");
  proyectNode.className = `animate__animated animate__zoomIn  animate__delay-.6s`;
  proyectNode.innerHTML = `<p class='proyect-date'>${proyect.fechaInicio}</p><p class='proyect-name'>${proyect.nombre}</p>`;
  proyectNode.addEventListener("click", () => {
    alertInformationProyect(proyect);
  });
  return proyectNode;
}

function renderProyect(container, proyect) {
  container.appendChild(createProyectItem(proyect));
}

async function renderProyects() {
  const proyects = await proyectService.getProyects()
  const containerProyects = document.getElementById("proyects");
  containerProyects.innerHTML = "";
  proyects.forEach((proyect) => {
    renderProyect(containerProyects, proyect);
  });
}

function alertInformationProyect(proyect) {
  const { nombre, fechaInicio } = proyect;
  Swal.fire({
    title: `${nombre}`,
    background: "#4b6584",
    html: ` <p class='information-proyect'>Fecha de inicio: ${fechaInicio}</p>
                <a class='link-model' href='#${nombre}'><button class='information-proyect-button'>More Info</button></a>,
                <button class='information-proyect-button'>OK</button>`,
    padding: "0",
    customClass: { title: "title-alert" },
    showConfirmButton: false,
  });

  const modal = document.createElement("section");
  modal.className = "modal";
  modal.id = `${nombre}`;
  modal.innerHTML = `
    <div class="border-gradient-modal">
      <div>
        <h2>${nombre}</h2>
        <a id='link-${nombre}' href="#">Close</a>
        <div class='container-buttons-modal'>
          <button id='btn-contratos'>Contratos</button>
          <button id='btn-propuestas'>Propuestas</button>
          <button id='btn-montos'>Montos</button>
        </div>
        <div id='information-proyect'>
        </div>
      </div>
    </div>`;

  document.querySelector("main").appendChild(modal);
  const buttonOK = document.getElementsByClassName(
    "information-proyect-button"
  )[1];
  const buttonMoreInfo = document.getElementsByClassName(
    "information-proyect-button"
  )[0];

  buttonOK.addEventListener("click", () => {
    Swal.close();
  });

  buttonMoreInfo.addEventListener("click", () => {
    Swal.close();

    document.getElementById(`link-${nombre}`).addEventListener("click", () => {
      setTimeout(() => {
        document.getElementById(`${nombre}`).remove();
      }, 1000);
    });
  });
}

const btnChageOption = document.getElementById("btn-change-option");

btnChageOption.addEventListener("click", async () => {
  const circle = btnChageOption.childNodes[0];
  const main = document.getElementById("main");

  if (circle.className.includes("change-page")) {
    circle.className = "change-search";
    btnChageOption.style.background = "#3c6382";
    main.innerHTML = `
        <h1 class="animate__animated animate__bounceInDown"><span>T</span>racking Proyects</h1>
            <div class="bar">
                <div class="search-bar animate__animated animate__bounceInDown">
                    <input type="text" placeholder="Buscar Proyectos" id="searchProyect">
                    <i id='searchIcon' class="fa-solid fa-magnifying-glass"></i>
                </div>
                <!-- <div class="btns">
                    <button class="btn-append-proyect">Aniadir</button>
                    <button class="btn-remove-proyect">Quitar</button>
                </div> -->
            </div>
            <ol id="proyects">
            </ol>
            <div class="container-change-options-2">
                <div class="change-options-2"></div>
            </div>`;
    changeSearchPage(await proyects);
    main.className = "containerMain";
    document.body.style.background = "#f7f1e3";
  } else {
    circle.className = "change-page";
    btnChageOption.style.background = "#74b9ff";
    main.innerHTML = `
        <h1 class="animate__animated animate__bounceInLeft change-option"><span>T</span>racking Proyects</h1>  
        <div class="main-container-change animate__animated animate__zoomIn">
            <div class="container-title-options">
                <h2>Options</h2>
            </div>
            <div class="container-options">
                <button class="btn-append-proyect">Append</button>
                <button class="btn-remove-proyect">Remove</button>
                <button class="btn-remove-proyect">Edit</button>
                <button class="btn-remove-proyect">Finish</button>
            </div>
        </div>`;
    main.className = "container-main";
    document.body.style.background = "#2f3640";
  }
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map