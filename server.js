const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const itemRouter = require("./routes/Item");
const detailRouter = require("./routes/detail");
const userRouter = require("./routes/user");

dotenv.config();
app.use(express.json());

app.use("/api/item", itemRouter);
app.use("/api/detail", detailRouter);
app.use("/api/user", userRouter);

mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("connected to DB");
});

const PORT = process.env.CUSTOM_PORT;
app.listen(PORT);
