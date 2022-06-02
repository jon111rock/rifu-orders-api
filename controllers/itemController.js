const Item = require("../models/Item");

const createItem = async (req, res) => {
  const newItem = new Item({
    name: req.body.name,
    price: req.body.price,
  });

  try {
    const saveItem = await newItem.save();
    res.json({ message: "success", result: saveItem });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const getItem = async (req, res) => {
  try {
    const items = await Item.find();
    res.json({ message: "success", result: items });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const updateItem = async (req, res) => {
  try {
    await Item.updateOne(
      { _id: req.params.itemId },
      {
        $set: {
          name: req.body.name,
          price: req.body.price,
        },
      }
    );
    res.json({ message: "success" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const deleteItem = async (req, res) => {
  try {
    await Item.deleteOne({ _id: req.params.itemId });
    res.json({ message: "success" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = {
  createItem,
  getItem,
  updateItem,
  deleteItem,
};
