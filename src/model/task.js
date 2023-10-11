const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  estado: {
    type: String,
    enum: ["pendiente", "completado"],
    default: "pendiente",
  }
});

module.exports = model("tasks", taskSchema);
