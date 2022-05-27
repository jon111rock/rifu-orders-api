const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

router
  .route("/")
  .post(orderController.createOrder)
  .get(orderController.getAllOrders);

router
  .route("/:orderId")
  .get(orderController.getOneOrder)
  .patch(orderController.updateOrder)
  .delete(orderController.deleteOrder);

module.exports = router;
