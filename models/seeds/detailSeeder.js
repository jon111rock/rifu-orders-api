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
  // console.log("Creating detail seed ...");
  // Item.find()
  //   .then((items) => {
  //     const itemsIdArray = [];
  //     items.forEach((item) => {
  //       itemsIdArray.push(item._id);
  //     });

  //     return itemsIdArray;
  //   })
  //   .then((ids) => {
  //     for (let i = 0; i < ids.length; i++) {
  //       Detail.create({
  //         count: i + 1,
  //         item: ids[i],
  //       });
  //     }
  //     console.log("detailSeeder.js is done !");
  //   })
  //   .catch((error) => console.error(error));

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
