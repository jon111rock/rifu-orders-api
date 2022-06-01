const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Order = require("../Order");
const Detail = require("../Detail");
const User = require("../User");

dotenv.config();

//connect to db
mongoose.connect(process.env.DB_CONNECTION);

const db = mongoose.connection;

db.once("open", () => {
  createOrderSeed();
});

const createOrderSeed = async () => {
  try {
    const details = await Detail.find();
    const user = await User.findOne({ _id: "6296f87b86c92806a72a92ed" });

    let userDetailIds = [];
    for (let i = 0; i < details.length; i++) {
      if (details[i].user.equals(user._id)) {
        userDetailIds.push(details[i]._id);
      }
    }

    await Order.create({
      user: user._id,
      date: "2021/05/19",
      completed_date: "2021/05/23",
      type: "自取",
      state: "已完成",
      details: userDetailIds,
    });

    console.log("orderSeeder.js is done !");
    db.close();
  } catch (error) {
    console.error(error);
  }
};
