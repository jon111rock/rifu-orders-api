const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Order = require("../Order");
const Detail = require("../Detail");

dotenv.config();

//connect to db
mongoose.connect(process.env.DB_CONNECTION);

const db = mongoose.connection;

db.once("open", () => {
  createOrderSeed();
});

const createOrderSeed = async () => {
  const details = await Detail.find();

  for (let i = 0; i < details.length; i++) {
    Order.create({
      date: "",
      completed_date: "",
      type: "",
      state: "",
      details: "",
    });
  }

  console.log(details);
};
