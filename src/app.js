require("dotenv").config();
const express = require("express");
const app = express();
const routesTask = require("./routes/routesTask");

const methods = ["GET", "POST", "PUT", "DELETE"];

app.use(express.json());

app.use("/tareas", routesTask);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use((req, res, next) => {
  if (methods.includes(req.method)) next();
  else res.status(400).json({ error: "Método http no válido" });
});

module.exports = app;
