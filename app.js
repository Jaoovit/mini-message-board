require("dotenv").config();

const express = require("express");
const messageRouter = require("./routes/messageRoutes");
const path = require("node:path");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  next();
});

app.use("/messages", messageRouter);

// set the port with the dotenv
const PORT = process.env.PORT;

// define the views path with the directory names
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// define the style route
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

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

app.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

/*
app.get("/new", (req, res) => {
  res.render("index");
});
*/

app.listen(PORT, () => {
  console.log(`This server is running in ${PORT} port`);
});
