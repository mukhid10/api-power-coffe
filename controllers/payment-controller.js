const Payment = require("../models/payment-model");

module.exports = {
  getAll: async (req, res) => {
    try {
      const data = await Payment.find();

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
      const data = await Payment.findById(req.params.id);

      res.json({
        msg: "Success Get Data By ID",
        result: data,
      });
    } catch (error) {
      console.error(error);
    }
  },
  addPayment: async (req, res) => {
    try {
      const { name, metodePembayaran, alamat, phone, picture } = req.body;
      // const image = req.file.path;

      const data = await Payment.create({
        name: name,
        metodePembayaran: metodePembayaran,
        image: req.file?.path ? `http://localhost:5000/${req.file.path}` : null,
        alamat: alamat,
        phone: phone,
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
      const { name, metodePembayaran, alamat, phone } = req.body;
      const image = req.file.path;
      await Payment.updateOne(
        { _id: req.params.id },
        {
          $set: {
            name: name,
            metodePembayaran: metodePembayaran,
            image: `http://localhost:5000/${image}`,
            alamat: alamat,
            phone: phone,
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
      await Payment.deleteOne({ _id: req.params.id });

      res.json({
        msg: "delete success",
      });
    } catch (error) {
      console.error(error);
    }
  },
};
