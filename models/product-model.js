const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  price: {
    type: Number,
  },
  discount: {
    type: Number,
  },
  image: {
    type: String,
    required: true,
  },
});

const productModels = mongoose.model("product", productSchema);
module.exports = productModels;
