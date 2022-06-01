const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  oid: {
    type: String,
  },
  date: {
    type: Date,
  },
  completed_date: {
    type: Date,
  },
  type: {
    type: String,
  },
  detail: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Detail",
  },
  status: {
    type: String,
  },
});

module.exports = mongoose.model("Order", orderSchema);
