const List = require("../models/List");

const resolvers = {
  Query: {
    // Obtener todas las listas
    getLists: async () => {
      return await List.findAll();
    },
    // Obtener una lista por ID
    getList: async (_, { id }) => {
      return await List.findByPk(id);
    },
  },

  Mutation: {
    // Actualizar una lista por ID
    updateList: async (_, { id, nombre, descripcion }) => {
      const lista = await List.findByPk(id);
      if (!lista) {
        throw new Error("❌ Lista no encontrada");
      }

      // Solo actualizar los valores proporcionados
      if (nombre) lista.nombre = nombre;
      if (descripcion) lista.descripcion = descripcion;

      await lista.save();
      return lista;
    },
  },
};

module.exports = resolvers;
