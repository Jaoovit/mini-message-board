const express = require("express");
const messageController = require("../controllers/messageController");

const router = express.Router();

router.get("/new", messageController.getMessages);

module.exports = router;
