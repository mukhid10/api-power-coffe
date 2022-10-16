const Midtrans = require("../models/midtrans-model");
const Cart = require("../models/cart-model");
const axios = require("axios");
const base64 = require("base-64");
const randomstring = require('randomstring')
require("dotenv").config();

module.exports = {
  postBayar: async (req, res) => {
    try {
      let total = 0;

      await Cart.find({
        userId: req.body.userId,
      }).then((val)=>{
        val.forEach((item, index)=>{
          total += item.price
        })
      })

      const data = {
        payment_type: "bank_transfer",
        transaction_details: {
          order_id: `pwcoffe-${randomstring.generate(5)}`,
          gross_amount: total,
        },
        bank_transfer: {
          bank: req.body.bank,
        },
      };

      const Axios = axios.create({
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Basic ${base64.encode(process.env.MIDTRANS_KEY)}`,
        },
      });
      const rest = await Axios.post(
        "https://api.sandbox.midtrans.com/v2/charge",
        data
      );
      // console.log(rest.data.order_id);
      const dataPembayaran = await Midtrans.create({
        order_id: rest.data.order_id,
        transaction_id: rest.data.transaction_id,
        total: rest.data.gross_amount,
        payment_type: rest.data.payment_type,
        transaction_status: rest.data.transaction_status,
        bank: rest.data.va_numbers[0].bank,
      });
      res.json({
        msg: "Succes Add pembayaran",
        result: dataPembayaran,
      });
    } catch (error) {
      console.log(error);
    }
  },
};
