const express = require("express");
const { updateList } = require("../controllers/Listcontroller");

const router = express.Router();

// 🔄 Ruta para actualizar listas
router.put("/lists/:id", updateList);

module.exports = router;
