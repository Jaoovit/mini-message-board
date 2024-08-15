require("dotenv").config();

const express = require("express");
const path = require("node:path");

const app = express();

// set the port with the dotenv
const PORT = process.env.PORT;

// define the views path with the directory names
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`This server is running in ${PORT} port`);
});
