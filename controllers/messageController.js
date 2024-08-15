const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
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
    text: req.body.userMessage,
    user: req.body.userName,
    added: new Date(),
  });

  res.redirect("/");
};

module.exports = { getMessages, getForms, postMessages };
