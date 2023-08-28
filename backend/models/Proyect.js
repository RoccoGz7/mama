const { Schema, model } = require("mongoose");

const ProyectModel = new Schema({
  nombre: { type: String, required: true },
  fechaInicio: { type: String, required: true },
});

module.exports = model("Proyect", ProyectModel);
