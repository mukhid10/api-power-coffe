const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

module.exports = {
  getAll: async (req, res) => {
    try {
      const data = await User.find();
      res.json({
        msg: "Get All Users Success",
        data: data,
      });
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const data = await User.findById(req.params.id);
      res.json({
        ms: "success get user by ID",
        data: data,
      });
    } catch (error) {
      console.log(error);
    }
  },
  //Register
  addUser: async (req, res) => {
    const data = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(data.password, salt);
    data.password = hash;

    try {
      await User.create(data);
      console.log(data);
      res.json({
        message: "Register Success",
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },

  //Login
  addUserLogin: async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });
    const unHAsh = bcrypt.compareSync(password, user.password);

    try {
      if (user && unHAsh) {
        res.json({
          msg: "Login Success",
          data: user,
        });
      } else {
        res.send("Email atau password salah");
      }
    } catch (error) {
      res.status(500).send(error);
    }
  },
  updateUser: async (req, res) => {
    try {
      await User.updateOne({ id: req.params.id }, { $set: req.body });
      res.json({
        msg: "update success",
      });
    } catch (error) {
      console.log(error);
    }
  },
  deleteUser: async (req, res) => {
    try {
      await User.deleteOne({ id: req.params.id });
      res.json({
        msg: "delete success",
      });
    } catch (error) {
      console.log(error);
    }
  },
};
