const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  userId: {
    type: String,
  },
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

const cartModels = mongoose.model("cart", cartSchema);
module.exports = cartModels;
