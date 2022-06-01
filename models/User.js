const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
  },
  address: {
    type: String,
  },
  phone_number: {
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema);
