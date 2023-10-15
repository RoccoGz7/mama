const { Router } = require("express");

const router = Router();
const Proyect = require("../models/Proyect");

router.get("/api/proyects", async (request, response) => {
  response.json(await Proyect.find());
});

router.post("/api/proyects", async (request, response) => {
  const { nombre, fechaInicio, etapaComercial } = request.body;
  console.log(request.body)
  const newProyect = new Proyect({ nombre, fechaInicio, etapaComercial });
  newProyect.save();
  response.json({ message: "Proyect Save" });
});

router.delete("/api/proyects/:id", async (request, response) => {
  console.log(request.params.id)
  await Proyect.findByIdAndDelete(request.params.id);
  response.json({ message: "Proyect Delete" });
});

router.put("/api/proyects/:id", async (request, response) => {
  const { etapaComercial } = request.body
  // console.log(`${request.params.id} / ${etapaComercial}`)
  await Proyect.findByIdAndUpdate(request.params.id, { etapaComercial })
  response.json({ message: "Proyect Edit" });
});

module.exports = router;