const express = require("express");
const router = express.Router();
const multer = require("multer");

//Multer
const { fileStorage, fileFilter } = require("../configs/multer");

const {
  getAll,
  getById,
  addPayment,
  updateById,
  deleteById,
} = require("../controllers/payment-controller");

router.get("/", getAll);
router.get("/:id", getById);
router.post(
  "/",
  multer({ storage: fileStorage, fileFilter: fileFilter }).single("image"),
  addPayment
);
router.put(
  "/:id",
  multer({ storage: fileStorage, fileFilter: fileFilter }).single("image"),
  updateById
);
router.delete("/:id", deleteById);

module.exports = router;
