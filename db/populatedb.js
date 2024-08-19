#!/usr/bin/env node
require("dotenv").config();
const { Client } = require("pg");

// Environment variables
const HOST = process.env.HOST;
const USER = process.env.USER;
const DB = process.env.DB;
const PASSWORD = process.env.PASSWORD;
const SQLPORT = process.env.SQLPORT;

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
    connectionString: `postgresql://${USER}:${PASSWORD}@${HOST}:${SQLPORT}/${DB}`,
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
