const express = require("express");
const messageController = require("../controllers/messageController");
const router = express.Router();

router.get("/", messageController.getMessages);

router.get("/new", messageController.getForms);

router.post("/new", messageController.postMessages);

module.exports = router;
