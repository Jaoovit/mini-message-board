const messages = [
  {
    id: 0,
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    id: 1,
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

const getMessages = (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
};

const getForms = (req, res) => {
  res.render("form");
};

const postMessages = (req, res) => {
  messages.push({
    id: messages.length,
    text: req.body.userMessage,
    user: req.body.userName,
    added: new Date(),
  });

  res.redirect("/");
};

const getMessageById = (req, res) => {
  const messageId = req.params.id;
  const message = messages[messageId];
  res.render("message", { message: message });
};

module.exports = { getMessages, getForms, postMessages, getMessageById };
