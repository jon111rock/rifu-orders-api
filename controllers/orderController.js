const Order = require("../models/Order");
const Item = require("../models/Item");

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json({ message: "success", object: orders });
  } catch (error) {
    res.json({ message: "error", object: error.message });
  }
};

const getOneOrder = async (req, res) => {
  try {
    const order = await Order.findOne({ _id: req.params.orderId });
    res.json({ message: "success", object: order });
  } catch (error) {
    res.json({ message: "error", object: error.message });
  }
};

const createOrder = async (req, res) => {
  const newOrder = new Order({
    name: req.body.name,
    address: req.body.address,
    phone_number: req.body.phone_number,
    local_number: req.body.local_number,
    order: req.body.order,
  });

  try {
    const saveOrder = await newOrder.save();
    res.json({
      message: "success",
      object: saveOrder,
    });
  } catch (error) {
    res.json({ message: "error", object: error.message });
  }
};

const updateOrder = async (req, res) => {
  try {
    const updatedOrder = await Order.updateOne(
      { _id: req.params.orderId },
      {
        $set: {
          name: req.body.name,
          address: req.body.address,
          phone_number: req.body.phone_number,
          local_number: req.body.local_number,
          order: req.body.order,
        },
      }
    );
    res.json({ message: "success" });
  } catch (error) {
    res.json({ message: "error", object: error.message });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const removeOrder = await Order.deleteOne({ _id: req.params.orderId });
    res.json({ message: "success" });
  } catch (error) {
    res.json({ message: "error", object: error.message });
  }
};

module.exports = {
  getAllOrders,
  getOneOrder,
  createOrder,
  updateOrder,
  deleteOrder,
};
