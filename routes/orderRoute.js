const getAllOrder = require("../controllers/getOrder");
const getUserOrder = require("../controllers/getUserOrder");
const { auth } = require("../middlewares/auth");
const router = require("express").Router();

router.get("/", getAllOrder);
router.get("/user", auth, getUserOrder);

module.exports = router;
