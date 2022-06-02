const mongoose = require("mongoose");

const detailSchema = mongoose.Schema({
  count: {
    type: Number,
  },
  item: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Item",
    // type: String,
  },
});

const orderSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  date: {
    type: String,
  },
  completed_date: {
    type: String,
  },
  type: {
    type: String,
  },
  state: {
    type: String,
  },
  details: {
    // type: [mongoose.Schema.Types.ObjectId],
    // ref: "Detail",
    type: [detailSchema],
  },
});

module.exports = mongoose.model("Order", orderSchema);
