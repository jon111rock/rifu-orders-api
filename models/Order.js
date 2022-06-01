const mongoose = require("mongoose");

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
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Detail",
  },
});

module.exports = mongoose.model("Order", orderSchema);
