const express = require("express");
const router = express.Router();

const {
  getAll,
  getById,
  updateUser,
  deleteUser,
  addUser,
  addUserLogin,
} = require("../controllers/user-controller");

//register & Login
router.post("/register", addUser);
router.post("/login", addUserLogin);
router.get("/", getAll);
router.get("/:id", getById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
