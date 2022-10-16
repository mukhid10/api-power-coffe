const express = require("express");
const router = express.Router();
const multer = require("multer");

//Multer
const { fileStorage, fileFilter } = require("../configs/multer");

const {
  getAll,
  getById,
  addCart,
  updateById,
  deleteById,
  getByUserId,
  deleteByUserId,
} = require("../controllers/cart-controller");

router.get("/", getAll);
router.get("/:id", getById);
router.post("/userId", getByUserId);

router.post(
  "/",
  multer({ storage: fileStorage, fileFilter: fileFilter }).single("image"),
  addCart
);
router.put(
  "/:id",
  multer({ storage: fileStorage, fileFilter: fileFilter }).single("image"),
  updateById
);
router.delete("/:id", deleteById);
router.post("/delete", deleteByUserId);

module.exports = router;
