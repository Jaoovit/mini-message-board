const express = require("express");
const messageController = require("../controllers/messageController");
const router = express.Router();

router.get("/new", messageController.getForms);

router.post("/new", messageController.postMessage);

router.get("/message/:id", messageController.getMessageById);

router.get("/", messageController.getMessageInfo);

router.post("/deleteMessages", messageController.deleteAllMessages);

router.post("/deleteMessages/:id", messageController.deleteMessageById);

module.exports = router;
