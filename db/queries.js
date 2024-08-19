const pool = require("./pool");

/*
async function getListOfMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}
*/

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM user_messages");
  return rows;
}

async function insertUsername(username) {
  await pool.query(
    "INSERT INTO usernames (username) VALUES ('" + username + "')"
  );
}

module.exports = {
  /*getListOfMessages*/
  getAllUsernames,
  insertUsername,
};
