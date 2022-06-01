const express = require("express");
const router = express.Router();
const itemController = require("../controllers/itemController");

router.route("/").post(itemController.createItem).get(itemController.getItem);

module.exports = router;
