const db = require("../db/queries");

const getForms = (req, res) => {
  res.render("form");
};

const postMessages = (req, res) => {
  res.redirect("/messages");
};

const getMessageById = (req, res) => {};

async function getMessageInfo(req, res) {
  const userMessages = await db.getAllUsernames();
  console.log(userMessages);
  res.render("index", { messages: userMessages });
}

module.exports = {
  getForms,
  postMessages,
  getMessageById,
  getMessageInfo,
};
