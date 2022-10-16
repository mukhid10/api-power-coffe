const mongoose = require("mongoose");

const paymentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  metodePembayaran: {
    type: String,
  },
  image: {
    type: String,
  },
  alamat: {
    type: String,
  },
  phone: {
    type: String,
  },
});

const paymentModels = mongoose.model("payment", paymentSchema);
module.exports = paymentModels;
