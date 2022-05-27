const mongoose = require("mongoose");

const content = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
});

const order = mongoose.Schema({
  id: String,
  date: {
    type: String,
    required: true,
  },
  completed_date: String,
  orderType: String,
  content: {
    type: [content],
    required: true,
  },
  total: String,
  state: String,
});

const orderSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone_number: String,
  local_number: String,
  order: {
    type: order,
    required: true,
  },
});

module.exports = mongoose.model("Order", orderSchema);
