const Product = require("../models/product-model");

module.exports = {
  getAll: async (req, res) => {
    try {
      const data = await Product.find();

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
      const data = await Product.findById(req.params.id);

      res.json({
        msg: "Success Get Data By ID",
        result: data,
      });
    } catch (error) {
      console.error(error);
    }
  },
  addProduct: async (req, res) => {
    try {
      const { name, category, price, discount } = req.body;
      const image = req.file.path;

      const data = await Product.create({
        name: name,
        category: category,
        price: price,
        discount: discount,
        image: `http://localhost:5000/${image}`,
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
      const { name, category, price, discount } = req.body;
      const image = req.file.path;
      await Product.updateOne(
        { _id: req.params.id },
        {
          $set: {
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
      await Product.deleteOne({ _id: req.params.id });

      res.json({
        msg: "delete success",
      });
    } catch (error) {
      console.error(error);
    }
  },
};
