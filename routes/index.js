const express = require("express");
const router = express.Router();

const userRouter = require("./user-route");
const productRouter = require("./product-route");
const cartRouter = require("./cart-route");
const paymentRoute = require("./payment-route");
const midtrans = require("./midtrans");

router.use("/users", userRouter);
router.use("/products", productRouter);
router.use("/carts", cartRouter);
router.use("/payments", paymentRoute);
router.use("/midtrans", midtrans);

module.exports = router;
