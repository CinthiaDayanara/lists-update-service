const db = require("../config/database");

const List = {
  getById: async (id) => {
    const result = await db.query("SELECT * FROM listas WHERE id = $1", [id]);
    return result.rows[0];
  },

  update: async (id, nombre, descripcion) => {
    const result = await db.query(
      "UPDATE listas SET nombre = $1, descripcion = $2 WHERE id = $3 RETURNING *",
      [nombre, descripcion, id]
    );
    return result.rows[0];
  },
};

module.exports = List;
