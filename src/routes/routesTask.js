const express = require("express");
const { check } = require("express-validator");
const routesTask = express.Router();
const {
  createTask,
  updateTask,
  deleteTask,
  getAllTasks,
  getTaskById,
} = require("../controllers/taskController");
const isObjectEmpty = require("../utils/isObjectEmpty");

const emptyBody = (req, res, next) => {
  if (!isObjectEmpty(req.body)) next();
  else res.status(400).json({ error: "Envíe como mínimo un campo" });
};

routesTask
  .route("/")
  .get(getAllTasks)
  .post(
    [
      check("nombre", "El nombre es obligatorio").not().isEmpty(),
      check("descripcion", "La descripción es obligatoria").not().isEmpty(),
    ],
    createTask
  );

routesTask
  .route("/:id")
  .get(getTaskById)
  .put(emptyBody, updateTask)
  .delete(deleteTask);

module.exports = routesTask;
