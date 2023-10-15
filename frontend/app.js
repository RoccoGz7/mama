import "./style/normalize.css";
import "./style/index.css";
import "./style/indexMin.css";
import './style/modal.css';
import './style/alert.css';

import ProyectService from "./service/ProyectService";
import { burble } from "./js/burble";
import { alertBtnAdd, alertBtnRm, alertBtnApproved } from "./js/alerts";


particlesJS(burble)

const proyectService = new ProyectService();

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
    Swal.fire(alertBtnAdd)
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
    Swal.fire(alertBtnRm);
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
    Swal.fire(alertBtnApproved)
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