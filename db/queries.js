const pool = require("./pool");

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM user_messages");
  return rows;
}

async function insertNewMessage(user, message) {
  const { rows } = await pool.query(
    `INSERT INTO user_messages (username, message, created_at) VALUES ('${user}', '${message}', NOW())`
  );
  return rows;
}

async function cleanUpMessageBoard() {
  await pool.query("DELETE FROM user_messages");
}

async function getMessageUsingId(id) {
  const { rows } = await pool.query(
    `SELECT * FROM user_messages WHERE id = ${id}`
  );
  return rows;
}

async function deleteMessageUsingId(id) {
  await pool.query(`DELETE FROM user_messages WHERE id = ${id}`);
}

module.exports = {
  getAllUsernames,
  insertNewMessage,
  cleanUpMessageBoard,
  getMessageUsingId,
  deleteMessageUsingId,
};
