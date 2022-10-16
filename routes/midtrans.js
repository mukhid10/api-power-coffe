const express = require("express");
const router = express.Router();

const { postBayar } = require("../controllers/midtrans-controller");

router.post("/", postBayar);

module.exports = router;
