const { v4: uuid4 } = require("uuid");

let listaTareas = [];
const TIME = 2000;

const agregar = (tarea) => {
  return new Promise((resolve) => {
    listaTareas.push({ id: uuid4(), ...tarea, estado: "pendiente" });
    setTimeout(() => {
      resolve("Tarea agregada correctamente");
    }, TIME);
  });
};

const actualizar = (id, data) => {
  return new Promise((resolve) => {
    const index = buscarIndicePorId(listaTareas, id);
    listaTareas[index] = { ...listaTareas[index], ...data };
    setTimeout(() => {
      resolve("Buen trabajo, estado actualizado correctamente");
    }, TIME);
  });
};

const eliminar = (id) => {
  return new Promise((resolve) => {
    listaTareas = listaTareas.filter((tarea) => tarea.id != id);
    setTimeout(() => {
      resolve("Tarea eliminada correctamente");
    }, TIME);
  });
};

const buscarPorId = (id) => {
  return new Promise((resolve, reject) => {
    const tareaResp = listaTareas.find((tarea) => tarea.id == id);
    setTimeout(() => {
      if (!tareaResp) reject(`Tarea con ID ${id} no existe`);
      resolve(tareaResp);
    }, TIME);
  });
};

const filtrarPorEstado = (estado) => {
  return new Promise((resolve, reject) => {
    const tareasFiltrada = listaTareas.filter((tarea) => tarea.estado == estado);
    setTimeout(() => {
      resolve(tareasFiltrada);
    }, TIME);
  });
};

const buscarIndicePorId = (listaTareas, id) => {
  return listaTareas.findIndex((tarea) => tarea.id == id);
};

const listar = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(listaTareas);
    }, TIME);
  });
};

module.exports = {
  agregar,
  actualizar,
  eliminar,
  listar,
  filtrarPorEstado,
  buscarPorId,
};
