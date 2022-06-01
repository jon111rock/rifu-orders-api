const mongoose = require("mongoose");
const Item = require("../Item");
const Detail = require("../Detail");

const dotenv = require("dotenv");
dotenv.config();

console.log("Connecting to db");
mongoose.connect(process.env.DB_CONNECTION);

const db = mongoose.connection;

db.once("open", () => {
  console.log("Creating detail seed ...");
  Item.find()
    .then((items) => {
      const itemsIdArray = [];
      items.forEach((item) => {
        itemsIdArray.push(item._id);
      });

      return itemsIdArray;
    })
    .then((ids) => {
      for (let i = 0; i < ids.length; i++) {
        Detail.create({
          count: i + 1,
          item: ids[i],
        });
      }
      console.log("detailSeeder.js is done !");
    })
    .catch((error) => console.error(error));
});
