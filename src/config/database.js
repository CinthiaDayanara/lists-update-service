const { Pool } = require("pg");
require("dotenv").config(); // ✅ Cargar variables de entorno

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432,
  ssl: process.env.DB_SSL === "true" ? { rejectUnauthorized: false } : false,
});

// Intentar conexión
const connectDB = async () => {
  try {
    await pool.connect();
    console.log("✅ Conectado a PostgreSQL");
  } catch (err) {
    console.error("❌ Error al conectar a PostgreSQL:", err);
    setTimeout(connectDB, 5000); // Reintentar conexión en 5 segundos
  }
};

connectDB();

module.exports = {
  query: (text, params) => pool.query(text, params),
  pool,
};
