const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

router.route("/:userId").post(orderController.createOrder);

router
  .route("/:orderId")
  .get(orderController.getOneOrder)
  .delete(orderController.deleteOrder);

router.route("/").get(orderController.getOrders);

module.exports = router;
