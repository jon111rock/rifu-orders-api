const mongoose = require("mongoose");

const detailSchema = mongoose.Schema({
  //order id
  oid: {
    type: mongoose.Schema.Types.ObjectId,
  },

  //user id
  uid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  count: {
    type: Number,
  },
  item: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Item",
  },
});

module.exports = mongoose.model("Detail", detailSchema);
