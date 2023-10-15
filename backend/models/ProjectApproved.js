const { Schema, model } = require("mongoose");

const ProyectApproved = new Schema({
  contrato: { type: String, required: true },
  propuesta: { type: String, required: true },
	monto: { type: String, required: true }
});


module.exports = model("ProyectApproved", ProyectApproved);
