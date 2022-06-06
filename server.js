const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const compression = require("compression");
const helmet = require("helmet");

const itemRouter = require("./routes/Item");
const userRouter = require("./routes/user");
const orderRouter = require("./routes/order");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(compression());
app.use(helmet());

app.use("/api/item", itemRouter);
app.use("/api/user", userRouter);
app.use("/api/order", orderRouter);

mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("connected to DB");
});

const PORT = process.env.PORT || process.env.CUSTOM_PORT;
app.listen(PORT);
