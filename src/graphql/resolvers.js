const List = require("../models/List");
const { validateListUpdate } = require("../utils/validators");

const resolvers = {
  Query: {
    getList: async (_, { id }) => {
      return await List.findByPk(id);
    }
  },
  Mutation: {
    updateList: async (_, { id, name, position }) => {
      try {
        const list = await List.findByPk(id);
        if (!list) throw new Error("Lista no encontrada.");

        // Validar datos de entrada
        validateListUpdate({ id, name, position });

        // Actualizar solo los campos que fueron enviados
        if (name !== undefined) list.name = name;
        if (position !== undefined) list.position = position;
        
        await list.save();
        return list;
      } catch (error) {
        throw new Error(error.message);
      }
    }
  }
};

module.exports = resolvers;
