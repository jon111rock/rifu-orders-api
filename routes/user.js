const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.route("/").post(userController.createUser).get(userController.getUsers);

router
  .route("/:userId")
  .patch(userController.updatedUser)
  .delete(userController.deleteUser)
  .get(userController.getOneUser);

router.route("/name/:userName").get(userController.getUserByName);

module.exports = router;
