const { Router } = require("express");

const router = Router();
const Proyect = require("../models/Proyect");

router.get("/", async (request, response) => {
  response.json(await Proyect.find());
});

router.post("/", async (request, response) => {
  const { nombre } = request.body;
  const newProyect = new Proyect({ nombre });
  newProyect.save();
  response.json({ message: "Proyect Save" });
});

router.delete("/:id", async (request, response) => {
  await Proyect.findByIdAndDelete(request.params.id);
  response.json({ message: "Proyect Delete" });
});

module.exports = router;
