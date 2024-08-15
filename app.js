require("dotenv").config();

const express = require("express");
const messageRouter = require("./routes/messageRoutes");
const path = require("node:path");
const app = express();

// define the views path with the directory names
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// parse form data correctly
app.use(express.urlencoded({ extended: true }));

// message routes
app.use("/", messageRouter);

// set the port with the dotenv
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`This server is running in ${PORT} port`);
});
