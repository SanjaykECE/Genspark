const Products = require("../models/Products");
const data = require("../data");

const loadProducts = async (req, res) => {
  try {
    const response = await Products.insertMany(data);
    res.json(200).json({ message: "Created", response });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

module.exports = loadProducts;
