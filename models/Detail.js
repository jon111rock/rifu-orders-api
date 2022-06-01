const mongoose = require("mongoose");

const detailSchema = mongoose.Schema({
  count: {
    type: Number,
  },
  item: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Item",
  },
});

module.exports = mongoose.model("Detail", detailSchema);
