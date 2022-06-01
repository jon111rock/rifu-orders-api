const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const orderRouter = require("./routes/orders");
const itemRouter = require("./routes/Item");

dotenv.config();
app.use(express.json());

// app.use("/api/order", orderRouter);
// app.use("/api/item", itemRouter);

mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("connected to DB");
});

const PORT = process.env.CUSTOM_PORT;
app.listen(PORT);
