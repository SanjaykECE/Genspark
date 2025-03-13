const router = require("express").Router();
const filterProducts = require("../controllers/filterProducts");
const searchProducts = require("../controllers/searchProduct");
const showProducts = require("../controllers/showProducts");
const createProduct = require("../controllers/createProduct");
const updateProduct = require("../controllers/updateProduct");
const deleteProduct = require("../controllers/deleteProduct");

// router for product api
router.get("/", showProducts);
router.get("/search/:name", searchProducts);
router.get("/filter", filterProducts);
router.post("/", createProduct);
router.patch("/", updateProduct);
router.delete("/", deleteProduct);

module.exports = router;
