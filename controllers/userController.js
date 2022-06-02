const User = require("../models/User");

const createUser = async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name,
      address: req.body.address,
      phone_number: req.body.phone_number,
    });

    const saveUser = await newUser.save();

    res.json({ message: "success", result: saveUser });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find().lean();
    res.json({ message: "success", result: users });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const updatedUser = async (req, res) => {
  try {
    const updatedUser = await User.updateOne(
      { _id: req.params.userId },
      {
        $set: {
          name: req.body.name,
          address: req.body.address,
          phone_number: req.body.phone_number,
        },
      }
    );

    res.json({ message: "success" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.deleteOne({ _id: req.params.userId });

    res.json({ message: "success" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = { createUser, getUsers, updatedUser, deleteUser };
