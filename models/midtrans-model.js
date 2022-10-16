const mongoose = require("mongoose");

const midtransSchema = mongoose.Schema({
  order_id: {
    type: String,
    required: true,
  },
  transaction_id: {
    type: String,
  },
  total: {
    type: String,
  },
  payment_type: {
    type: String,
  },
  transaction_status: {
    type: String,
  },
  bank: {
    type: String,
  },
});

const midtransModels = mongoose.model("midtrans", midtransSchema);
module.exports = midtransModels;
