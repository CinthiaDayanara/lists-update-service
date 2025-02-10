const { Pool } = require('pg');
require('dotenv').config(); // ✅ Cargar variables de entorno

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT || 5432,
    ssl: false, // ❗ Si estás usando RDS en AWS, cambia esto a { rejectUnauthorized: false }
});

pool.connect()
    .then(() => console.log('✅ Conectado a PostgreSQL'))
    .catch(err => console.error('❌ Error al conectar a PostgreSQL:', err));

module.exports = pool;
