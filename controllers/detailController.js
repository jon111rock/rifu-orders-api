const Detail = require("../models/Detail");
const Item = require("../models/Item");
const User = require("../models/User");

const createDetail = async (req, res) => {
  let requestBody = req.body;
  try {
    const itemInDb = await Item.findOne({ name: req.body.item });
    requestBody.item = itemInDb._id;
  } catch (error) {
    res.json({ message: error.message });
    return;
  }

  try {
    const newDetail = new Detail({
      user: req.params.userId,
      count: requestBody.count,
      item: requestBody.item,
    });
    const saveDetail = await newDetail.save();
    res.json({ message: "success", object: saveDetail });
  } catch (error) {
    res.json({ message: error.message, object: error.message });
  }
};

const getDetails = async (req, res) => {
  try {
    const details = await Detail.find()
      .populate("item")
      .populate("user")
      .lean();
    res.json({ message: "success", object: details });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const getOneDetail = async (req, res) => {
  try {
    const detail = await Detail.findOne({ _id: req.params.detailId });
    res.json({ message: "success", object: detail });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const updateDetail = async (req, res) => {
  let requestBody = req.body;

  try {
    const itemInDb = await Item.findOne({ name: req.body.item });
    requestBody.item = itemInDb._id;
  } catch (error) {
    res.json({ message: error.message });
    return;
  }
  try {
    const updatedDetail = await Detail.updateOne(
      { _id: req.params.detailId },
      {
        $set: {
          count: requestBody.count,
          item: requestBody.item,
        },
      }
    );

    res.json({ message: "success" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const deleteDetail = async (req, res) => {
  try {
    const deleteDetail = await Detail.deleteOne({ _id: req.params.detailId });
    res.json({ message: "success" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = {
  getDetails,
  createDetail,
  updateDetail,
  deleteDetail,
  getOneDetail,
};
