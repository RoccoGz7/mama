/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/js/alerts.js":
/*!*******************************!*\
  !*** ./frontend/js/alerts.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   alertBtnAdd: () => (/* binding */ alertBtnAdd),
/* harmony export */   alertBtnApproved: () => (/* binding */ alertBtnApproved),
/* harmony export */   alertBtnRm: () => (/* binding */ alertBtnRm)
/* harmony export */ });
const alertBtnAdd = {
	showConfirmButton: false,
	html: `
		<div class='alert-btn-add'>
			<h4 class='title-add-proyect'> Nuevo Proyecto </h4>
			<form id='form-add-proyect'>
				<input id='name-proyect' class='input-name-proyect' type='text' placeholder='Nombre del proyecto' />
				<input class='btn-name-proyect' type='submit' value='Crear Proyecto' />
			</form>
		</div>`,
		background: '#2f3640',
		padding: '1.2rem 1rem'
}

const alertBtnRm = {
	showConfirmButton: false,
	html: `
		<div class='alert-btn-add'>
			<h4 class='title-add-proyect'> Eliminar Proyecto </h4>
			<form id='form-add-proyect'>
				<input id='name-proyect' class='input-name-proyect' type='text' placeholder='Nombre del proyecto' />
				<input class='btn-name-proyect' type='submit' value='Borrar Proyecto' />
			</form>
		</div>`,
		background: '#2f3640',
		padding: '1.2rem 1rem'
}

const alertBtnApproved = {
	showConfirmButton: false,
	html: `
		<div class='alert-btn-add'>
			<h4 class='title-add-proyect'> Cambiar Etapa Proyecto </h4>
			<form id='form-add-proyect'>
				<input id='name-proyect' class='input-name-proyect' type='text' placeholder='Nombre del proyecto' />
				<input class='btn-name-proyect' type='submit' value='Buscar Proyecto' />
			</form>
			<div id='proyecto-actual'>
				<p id='nombre-actual'><span>nombre: </span></p>
				<p id='etapa-actual'><span>etapa: </span></p>
				<p id='fecha-actual'><span>fecha: </span></p>
			</div>
			<div class='etapa-options'>
				<button id='contacto-con-cliente' class='etapa contacto-con-cliente'>
					contacto
				</button>
				<button id='analisis-de-requerimientos' class='etapa analisis-de-requerimientos'>
					analisis
				</button>
				<button id='preparacion-de-oferta' class='etapa preparacion-de-oferta'>
					oferta
				</button>
				<button id='negociacion' class='etapa negociacion'>
					negociacion
				</button>
				<button id='inicio' class='etapa inicio'>
					inicio
				</button>
			</div>
			<form id='form-save'>
				<input class='btn-name-proyect' type='submit' value='Guardar' />
			</form>
		</div>`,
		background: '#2f3640',
		padding: '1.2rem 1rem'
}

/***/ }),

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
        this.URI = `${process.env.URL}/api/proyects`;
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
        await fetch(`${this.URI}/${id}`, {
            method: 'DELETE',
        })
    }

    async approvedProject(id, etapaComercial) {
        await fetch(`${this.URI}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ etapaComercial })
        })
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProyectService);

/***/ }),

/***/ "./frontend/style/alert.css":
/*!**********************************!*\
  !*** ./frontend/style/alert.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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

/***/ "./frontend/style/modal.css":
/*!**********************************!*\
  !*** ./frontend/style/modal.css ***!
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
/* harmony import */ var _style_indexMin_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style/indexMin.css */ "./frontend/style/indexMin.css");
/* harmony import */ var _style_modal_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style/modal.css */ "./frontend/style/modal.css");
/* harmony import */ var _style_alert_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style/alert.css */ "./frontend/style/alert.css");
/* harmony import */ var _service_ProyectService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/ProyectService */ "./frontend/service/ProyectService.js");
/* harmony import */ var _js_burble__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/burble */ "./frontend/js/burble.js");
/* harmony import */ var _js_alerts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/alerts */ "./frontend/js/alerts.js");











particlesJS(_js_burble__WEBPACK_IMPORTED_MODULE_6__.burble)

const proyectService = new _service_ProyectService__WEBPACK_IMPORTED_MODULE_5__["default"]();

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

async function renderProyects(proyects) {
  const containerProyects = document.getElementById("proyects");
  containerProyects.innerHTML = "";
  proyects.forEach((proyect) => {
    renderProyect(containerProyects, proyect);
  });
}

function alertInformationProyect(proyect) {
  const { nombre, fechaInicio, etapaComercial } = proyect;
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

  let isV = false
  let isA = false
  let isR = false

  switch (etapaComercial) {
    case ('contacto con cliente'):
      isR = true
      break
    case ('analisis de requerimientos'):
      isR = true
      break
    case ('preparacion de oferta'):
      isR = true
      isA = true
      break
    case ('negociacion'):
      isR = true
      isA = true
      break
    case ('inicio'):
      isR = true
      isA = true
      isV = true
      break
  }

  modal.innerHTML = `
    <div class="border-gradient-modal">
      <div>
        <h2>${nombre}</h2>
        <a id='link-${nombre}' href="#">Close</a>
        <div class='semaforo' id='semaforo'>
          <div id='luz-roja' class="${isR ? "brilla-roja" : ''}">
          </div>
          <div id='luz-amarilla' class="${isA ? 'brilla-amarilla' : '' }">
          </div>
          <div id='luz-verde' class="${isV ? 'brilla-verde' : '' }">
          </div>
        </div>
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
    changeSearchPage(await proyectService.getProyects());
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
                <button id='btn-add' class="btn-append-proyect">Append</button>
                <button id='btn-rm' class="btn-remove-proyect">Remove</button>
                <button id='btn-approved' class="btn-remove-proyect">Approved</button>
            </div>
        </div>`;
    main.className = "container-main";
    document.body.style.background = "#2f3640";
    initBtnsOptions()
  }
});

function getDate() {
  const date = new Date()
  const day = date.getDate()
  const month = parseInt(date.getMonth()) + 1
  const year = date.getFullYear()

  return `${day}/${month}/${year}`
}

function existe(proyects, proyectName) {
  return proyects.find(({ nombre }) => nombre.toLowerCase() === proyectName.toLowerCase()) === undefined ? false : true;
}

function getProyectByName(proyects, proyectName) {
  return proyects.find(({ nombre }) => proyectName.toLowerCase() === nombre.toLowerCase())
}
function getIdByName(proyects, proyectName) {
  return (proyects.find(({ nombre }) => nombre.toLowerCase() === proyectName.toLowerCase()))._id;
}

function initBtnsOptions() {
  const btnAdd = document.getElementById('btn-add');
  const btnRm = document.getElementById('btn-rm');
  const btnApproved = document.getElementById('btn-approved');

  btnAdd.addEventListener('click', () => {
    Swal.fire(_js_alerts__WEBPACK_IMPORTED_MODULE_7__.alertBtnAdd)
    const form = document.getElementById('form-add-proyect');
    const nameProyect = document.getElementById('name-proyect');
    
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const nombre = nameProyect.value;
      const fechaInicio = getDate();
      const etapaComercial = 'contacto con cliente'
      const proyect = {
        nombre,
        fechaInicio,
        etapaComercial
      }

      await proyectService.postProyect(proyect)
      Swal.close()
    })
  })

  btnRm.addEventListener('click', () => {
    Swal.fire(_js_alerts__WEBPACK_IMPORTED_MODULE_7__.alertBtnRm);
    const form = document.getElementById('form-add-proyect');
    const nameProyect = document.getElementById('name-proyect');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const proyectos = await proyectService.getProyects();
      const name = nameProyect.value
      const exist = existe(proyectos, name)

      if (exist) {
        await proyectService.deleteProyect(getIdByName(proyectos, name))
        Swal.close()
      } else {
        const input = document.getElementById('name-proyect')

        input.className += ' input-error'

        const curretValue = input.value

        input.value = 'El proyecto no existe'

        setTimeout(() => {
          document.getElementById('name-proyect').className = 'input-name-proyect'
          input.value = ''
        }, 3000)
      }
    })
  })

  btnApproved.addEventListener('click', () => {
    Swal.fire(_js_alerts__WEBPACK_IMPORTED_MODULE_7__.alertBtnApproved)
    const form = document.getElementById('form-add-proyect');
    const nameProyect = document.getElementById('name-proyect');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const proyectos = await proyectService.getProyects();
      const name = nameProyect.value
      const exist = existe(proyectos, name)
      
      if (exist) {
        document.getElementById('proyecto-actual').style.display = 'flex'
        const proyecto = getProyectByName(proyectos, name)

        const textName = document.getElementById('nombre-actual');
        const textStatus = document.getElementById('etapa-actual');
        const textDate = document.getElementById('fecha-actual');

        textName.innerHTML = `<span>nombre: </span>${proyecto.nombre}`
        textStatus.innerHTML = `<span>etapa: </span>${proyecto.etapaComercial}`
        textDate.innerHTML = `<span>fecha: </span>${proyecto.fechaInicio}`

        const btnId = remplaceChar(proyecto.etapaComercial, ' ', '-')
        
        const btnCurrentStatus = document.getElementById(btnId)

        btnCurrentStatus.className += ' etapa-actual'

        const btns = initBtnChangeStatus()

        document.getElementById('form-save').addEventListener('submit', (e) => {
          e.preventDefault()
          btns.forEach(async (btn) => {
            if (btn.className.includes('etapa-actual')) {
              const etapaComercial = remplaceChar(btn.className.split(' ')[1], '-', ' ')

              await proyectService.approvedProject(proyecto._id, etapaComercial)
              Swal.close()
            }
          })
        })

      } else {
        console.log('el proyecto no existe')
      }
    })
  })
}


function remplaceChar(cadena, a, b) {
  let res = '';
  for (let c of cadena) {
    if (c !== a) {
      res += c;
    } else {
      res += b;
    }
  }
  return res;
}

function getSelectClass(etapa) {
  return `etapa ${remplaceChar(etapa, ' ', '-')}`
}

function resetBtnChangeStatus(btns) {
  btns.forEach((btn) => {
    btn.className = getSelectClass(btn.id)
  })
}

function initBtnChangeStatus() {
  const btnContacto = document.getElementById('contacto-con-cliente');
  const btnAnalisis = document.getElementById('analisis-de-requerimientos');
  const btnOferta = document.getElementById('preparacion-de-oferta');
  const btnNegociacion = document.getElementById('negociacion');
  const btnInicio = document.getElementById('inicio');

  const btns = [btnContacto, btnAnalisis, btnOferta, btnNegociacion, btnInicio]

  btnContacto.addEventListener('click', () => {
    resetBtnChangeStatus(btns)
    btnContacto.className += ' etapa-actual'
  })

  btnAnalisis.addEventListener('click', () => {
    resetBtnChangeStatus(btns)
    btnAnalisis.className += ' etapa-actual'
  })

  btnOferta.addEventListener('click', () => {
    resetBtnChangeStatus(btns)
    btnOferta.className += ' etapa-actual'
  })

  btnNegociacion.addEventListener('click', () => {
    resetBtnChangeStatus(btns)
    btnNegociacion.className += ' etapa-actual'
  })

  btnInicio.addEventListener('click', () => {
    resetBtnChangeStatus(btns)
    btnInicio.className += ' etapa-actual'
  })

  return btns
}
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map