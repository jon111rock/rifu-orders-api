const Order = require("../models/Order");
const User = require("../models/User");
const Item = require("../models/Item");

const createOrder = async (req, res) => {
  let userId = "";
  //find user by id
  try {
    userId = await User.findOne({ _id: req.params.userId });
    if (!userId) {
      res.json({ message: "user not found" });
      return;
    }
  } catch (error) {
    res.json({ message: error.message });
    return;
  }

  try {
    for (let i = 0; i < req.body.details.length; i++) {
      const res = await Item.findOne({ name: req.body.details[i].item });
      req.body.details[i].item = res._id;
    }

    const newOrder = new Order({
      user: userId,
      date: req.body.date,
      completed_date: req.body.completed_date,
      type: req.body.type,
      state: req.body.state,
      details: req.body.details,
    });
    const saveOrder = await newOrder.save();
    res.json({ message: "success", result: newOrder });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const getOrders = async (req, res) => {
  try {
    const newOrder = await Order.find()
      .populate("user")
      .populate({
        path: "details",
        populate: {
          path: "item",
        },
      });
    res.json({ message: "success", result: newOrder });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const getOneOrder = async (req, res) => {
  try {
    const order = await Order.findOne({ _id: req.params.orderId })
      .populate("user")
      .populate("details")
      .populate({
        path: "details",
        populate: {
          path: "item",
        },
      });
    res.json({ message: "success", result: order });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const deleteOrder = async (req, res) => {
  try {
    await Order.deleteOne({ _id: req.params.orderId });
    res.json({ message: "success" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const updateOrder = async (req, res) => {
  try {
    for (let i = 0; i < req.body.details.length; i++) {
      const res = await Item.findOne({ name: req.body.details[i].item });
      req.body.details[i].item = res._id;
    }

    await Order.updateOne(
      { _id: req.params.orderId },
      {
        $set: {
          date: req.body.date,
          completed_date: req.body.completed_date,
          type: req.body.type,
          state: req.body.state,
          details: req.body.details,
        },
      }
    );
    res.json({ message: "success" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

// 怪怪的

module.exports = {
  createOrder,
  getOrders,
  getOneOrder,
  deleteOrder,
  updateOrder,
};
