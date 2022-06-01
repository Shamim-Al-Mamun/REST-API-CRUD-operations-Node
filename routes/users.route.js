const router = require("express").Router();

const {
  getAllUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/users.controller");

//user route
router.get("/", getAllUser);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
