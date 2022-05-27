const Order = require("../models/Order");

const getAllOrders = async (req, res) => {
  const orders = await Order.find();
  try {
    res.json({ message: "success", order: orders });
  } catch (error) {
    res.json(error.message);
  }
};

// const getOneOrder = async (req, res) => {
//   const order = Order.findOne({ _id: req.params.orderId });
//   try {

//   } catch (error) {
//     res.json(error.message);
//   }
// };

const createOrder = async (req, res) => {
  const newOrder = new Order({
    name: req.body.name,
    address: req.body.address,
    phone_number: req.body.phone_number,
    local_number: req.body.local_number,
    order: req.body.order,
  });

  try {
    const saveOrder = await newOrder.save();
    res.send({
      message: "success",
      orders: saveOrder,
    });
  } catch (error) {
    res.json(error.message);
  }
};

module.exports = { getAllOrders, createOrder };
