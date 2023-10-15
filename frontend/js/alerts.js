export const alertBtnAdd = {
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

export const alertBtnRm = {
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

export const alertBtnApproved = {
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