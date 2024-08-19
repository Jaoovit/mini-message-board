const express = require("express");
const messageController = require("../controllers/messageController");
const router = express.Router();

//router.get("/messages", messageController.getMessages);

router.get("/new", messageController.getForms);

router.post("/new", messageController.postMessages);

router.get("/:id", messageController.getMessageById);

router.get("/", messageController.getMessageInfo);

module.exports = router;
