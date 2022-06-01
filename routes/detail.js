const express = require("express");
const router = express.Router();
const detailController = require("../controllers/detailController");

router.route("/").get(detailController.getDetails);

router.route("/:userId").post(detailController.createDetail);

router
  .route("/:detailId")
  .patch(detailController.updateDetail)
  .delete(detailController.deleteDetail)
  .get(detailController.getOneDetail);

module.exports = router;
