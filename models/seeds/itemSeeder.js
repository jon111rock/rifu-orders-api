const mongoose = require("mongoose");
const Item = require("../Item");
const dotenv = require("dotenv");
dotenv.config();

const items = [
  ["香濃巧克力", 30],
  ["草莓三明治", 25],
  ["抹茶厚片", 40],
].map((item) => ({
  name: item[0],
  price: item[1],
}));

//Generate items seed
const createItemSeed = (db) => {
  Item.create(items).then(() => {
    db.close();
  });

  console.log("itemSeeder.js is done !");
};

//Connect to Db
console.log("Connecting to Db ...");
mongoose.connect(process.env.DB_CONNECTION);

let db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Db Connected.");
  console.log("Creating item seed ...");
  createItemSeed(db);
});
