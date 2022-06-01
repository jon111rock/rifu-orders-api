const Item = require("../models/Item");

const createItem = async (req, res) => {
  const newItem = new Item({
    name: req.body.name,
    price: req.body.price,
  });

  try {
    const saveItem = await newItem.save();
    res.json({ message: "success", object: saveItem });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const getItem = async (req, res) => {
  try {
    const items = await Item.find();
    res.json({ message: "success", object: items });
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = {
  createItem,
  getItem,
};
