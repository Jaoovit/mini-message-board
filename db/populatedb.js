#!/usr/bin/env node
require("dotenv").config();
const { Client } = require("pg");

// Environment variables
const DATABASE_URL = process.env.DATABASE_URL;

// SQL query to create the table and insert sample data
const SQL = `
CREATE TABLE IF NOT EXISTS user_messages (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO user_messages (username, message, created_at) 
VALUES
  ('Bryan', 'Hello, this is Bryan!', NOW()),
  ('Odin', 'Greetings from Odin!', NOW()),
  ('Damon', 'Damon says hi!', NOW());
`;

async function main() {
  console.log("Seeding the database...");
  const client = new Client({
    connectionString: DATABASE_URL,
  });

  try {
    await client.connect();
    await client.query(SQL);
    console.log("Table created and data inserted successfully.");
  } catch (err) {
    console.error("Error executing query:", err);
  } finally {
    await client.end();
  }
}

main();
