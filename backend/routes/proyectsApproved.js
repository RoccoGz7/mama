const { Router } = require("express");

const router = Router();
const ProyectApproved = require("../models/ProjectApproved");

router.get("/api/proyectsApproved", async (request, response) => {
  response.json(await ProyectApproved.find());
});

router.post("/api/proyectsApproved", async (request, response) => {
  const { nombre } = request.body;
  const newProyect = new ProyectApproved({ nombre });
  newProyect.save();
  response.json({ message: "ProyectApproved Save" });
});

router.delete("/api/proyectsApproved/:id", async (request, response) => {
  await ProyectApproved.findByIdAndDelete(request.params.id);
  response.json({ message: "ProyectApproved Delete" });
});

router.put("/api/proyectsApproved/:id", async (request, response) => {
  response.json({ message: "ProyectApproved Delete" });
});

module.exports = router;
