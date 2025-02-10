const List = require("../models/List");

// 🔄 Controlador para actualizar una lista
const updateList = async (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion } = req.body;

  try {
    const lista = await List.getById(id);
    if (!lista) {
      return res.status(404).json({ message: "❌ Lista no encontrada" });
    }

    const updatedList = await List.update(id, nombre || lista.nombre, descripcion || lista.descripcion);
    return res.status(200).json({ message: "✅ Lista actualizada con éxito", lista: updatedList });
  } catch (error) {
    return res.status(500).json({ message: "❌ Error al actualizar la lista", error: error.message });
  }
};

module.exports = { updateList };
