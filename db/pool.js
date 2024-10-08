require("dotenv").config();

const { Pool } = require("pg");

const DATABASE_URL = process.env.DATABASE_URL;

const pool = new Pool({
  connectionString: DATABASE_URL,
});

module.exports = pool;
