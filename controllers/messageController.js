const db = require("../db/queries");

const getForms = (req, res) => {
  res.render("form");
};

async function postMessage(req, res) {
  const userName = req.body.userName;
  const userMessage = req.body.userMessage;
  await db.insertNewMessage(userName, userMessage);
  res.redirect("/");
}

const getMessageById = (req, res) => {};

async function getMessageInfo(req, res) {
  const userMessages = await db.getAllUsernames();
  console.log(userMessages);
  res.render("index", { messages: userMessages });
}

async function deleteAllMessages(req, res) {
  await db.cleanUpMessageBoard();
  res.send("Your message board is clean");
}

module.exports = {
  getForms,
  postMessage,
  getMessageById,
  getMessageInfo,
  deleteAllMessages,
};
