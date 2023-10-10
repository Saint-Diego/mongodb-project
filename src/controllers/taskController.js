require("dotenv").config();
const { ObjectId } = require("mongodb");
const { validationResult } = require("express-validator");
const conectDB = require("../db");
const { mongo_collection } = require("../config/index");

const filters = ["completado", "pendiente"];

const collection = async () => {
  const db = (await conectDB()).collection(mongo_collection);
  return db;
};

const taskController = {
  create: async (req, res) => {
    req.body.estado = "pendiente";
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      await (await collection()).insertOne(req.body);
      res.status(201).json({ msg: "Tarea guardada correctamente" });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  update: async (req, res) => {
    const { id } = req.params;
    try {
      const task = await (
        await collection()
      ).updateOne({ _id: new ObjectId(id) }, { $set: req.body });
      if (task.modifiedCount === 0)
        return res.status(400).json({ error: `Tarea con ID ${id} no existe` });
      res.status(200).json({ msg: "Tarea actualizada correctamente" });
    } catch (error) {
      res.status(404).json({ error });
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const task = await (
        await collection()
      ).deleteOne({ _id: new ObjectId(id) });
      if (task.deletedCount === 0)
        return res.status(400).json({ error: `Tarea con ID ${id} no existe` });
      res.status(200).json({ msg: "Tarea eliminada correctamente" });
    } catch (error) {
      res.status(404).json({ error });
    }
  },
  getAll: async (req, res) => {
    const { state } = req.query;
    let tasks;
    try {
      if (state) {
        if (filters.includes(state))
          tasks = await (await collection()).find({ estado: state }).toArray();
        else
          return res
            .status(400)
            .json({ error: "Parámetro de consulta inválido" });
      } else tasks = await (await collection()).find({}).toArray();
      res.status(200).json(tasks);
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  getById: async (req, res) => {
    const { id } = req.params;
    try {
      const task = await (
        await collection()
      ).findOne({ _id: new ObjectId(id) });
      if (!task)
        return res.status(400).json({ error: `Tarea con ID ${id} no existe` });
      res.status(200).json({ task });
    } catch (error) {
      res.status(404).json({ error });
    }
  },
};

module.exports = taskController;
