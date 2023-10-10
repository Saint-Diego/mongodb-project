const express = require("express");
const { check } = require("express-validator");
const routesTask = express.Router();
const taskController = require("../controllers/taskController");
const isObjectEmpty = require("../utils/isObjectEmpty");

const emptyBody = (req, res, next) => {
  if (!isObjectEmpty(req.body)) next();
  else res.status(400).json({ error: "Envíe como mínimo un campo" });
};

routesTask
  .route("/")
  .get(taskController.getAll)
  .post(
    [
      check("nombre", "El nombre es obligatorio").not().isEmpty(),
      check("descripcion", "La descripción es obligatoria").not().isEmpty(),
    ],
    taskController.create
  );

routesTask
  .route("/:id")
  .get(taskController.getById)
  .put(emptyBody, taskController.update)
  .delete(taskController.delete);

module.exports = routesTask;
