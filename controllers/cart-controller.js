const Cart = require("../models/cart-model");

module.exports = {
  getAll: async (req, res) => {
    try {
      const data = await Cart.find();

      res.json({
        message: "Get All Data Success",
        result: data,
      });
    } catch (error) {
      console.error(error);
    }
  },
  getById: async (req, res) => {
    try {
      const data = await Cart.findById(req.params.id);

      res.json({
        msg: "Success Get Data By ID",
        result: data,
      });
    } catch (error) {
      console.error(error);
    }
  },
  getByUserId: async (req, res) => {
    try {
      const data = await Cart.find({
        userId: req.body.userId,
      });
      res.status(200).json({
        msg: "success get data by userID",
        products: data,
      });
    } catch (error) {
      console.error(error);
    }
  },
  addCart: async (req, res) => {
    try {
      const { userId, name, category, price, discount, image } = req.body;

      const data = await Cart.create({
        userId: userId,
        name: name,
        category: category,
        price: price,
        discount: discount,
        image: image,
      });

      res.json({
        msg: "Succes Add Category",
        result: data,
      });
    } catch (error) {
      console.error(error);
    }
  },
  updateById: async (req, res) => {
    try {
      const { userId, name, category, price, discount } = req.body;
      const image = req.file.path;
      await Cart.updateOne(
        { _id: req.params.id },
        {
          $set: {
            userId: userId,
            name: name,
            category: category,
            price: price,
            discount: discount,
            image: `http://localhost:5000/${image}`,
          },
        }
      );

      res.json({
        msg: "success update",
      });
    } catch (error) {
      console.log(error);
    }
  },
  deleteById: async (req, res) => {
    try {
      await Cart.deleteOne({ _id: req.params.id });

      res.json({
        msg: "delete success",
      });
    } catch (error) {
      console.error(error);
    }
  },
  deleteByUserId: async (req, res) => {
    try {
      const data = await Cart.deleteMany({
        userId: req.body.userId,
      });
      res.status(200).json({
        msg: "success delete data by userID",
      });
    } catch (error) {
      console.error(error);
    }
  },
};
