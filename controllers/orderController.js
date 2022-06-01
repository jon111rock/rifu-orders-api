const Order = require("../models/Order");
const Detail = require("../models/Detail");
const User = require("../models/User");

const createOrder = async (req, res) => {
  let userId = "";
  //find user by id
  try {
    userId = await User.findOne({ _id: req.params.userId });
  } catch (error) {
    res.json({ message: error.message });
  }

  let details = [];
  //find detail by userId
  try {
    details = await Detail.find({ uid: userId.id });
  } catch (error) {
    res.json({ message: error.message });
  }

  const newOrder = new Order({
    uid: userId._id,
    date: req.body.date,
    completed_date: req.body.completed_date,
    type: req.body.type,
    state: req.body.state,
    details: details,
  });
  try {
    const saveOrder = await newOrder.save();
    res.json({ message: "success", object: newOrder });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const getOrders = async (req, res) => {
  try {
    const newOrder = await Order.find()
      .populate("uid")
      .populate("details")
      .populate({
        path: "details",
        populate: {
          path: "item",
        },
      });
    res.json({ message: "success", object: newOrder });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const getOneOrder = async (req, res) => {
  try {
    const order = await Order.findOne({ _id: req.params.orderId })
      .populate("uid")
      .populate("details")
      .populate({
        path: "details",
        populate: {
          path: "item",
        },
      });
    res.json({ message: "success", object: order });
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

module.exports = { createOrder, getOrders, getOneOrder, deleteOrder };
