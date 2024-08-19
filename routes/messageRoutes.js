const express = require("express");
const messageController = require("../controllers/messageController");
const router = express.Router();

router.get("/new", messageController.getForms);

router.post("/new", messageController.postMessage);

router.get("/:id", messageController.getMessageById);

router.get("/", messageController.getMessageInfo);

router.post("/deleteMessages", messageController.deleteAllMessages);

module.exports = router;
