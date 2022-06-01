const mongoose = require("mongoose");
const Item = require("../Item");
const Detail = require("../Detail");
const User = require("../User");

const dotenv = require("dotenv");
dotenv.config();

console.log("Connecting to db");
mongoose.connect(process.env.DB_CONNECTION);

const db = mongoose.connection;

db.once("open", async () => {
  const items = await Item.find();
  const users = await User.find();

  for (let i = 0; i < users.length; i++) {
    await Detail.create({
      uid: users[i]._id,
      count: (i + 1) * 5,
      item: items[2]._id,
    });
  }

  console.log("detailSeeder.js is done !");

  try {
  } catch (error) {
    console.error(error);
  }
});
