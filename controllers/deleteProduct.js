const Products = require("../models/Products");

const deleteProduct = async (req, res) => {
  try {
    const { productName } = req.body;
    if (!productName) {
      return res.status(400).json({ message: "Id is required" });
    }
    const response = await Products.findOneAndDelete({ productName });
    res.status(201).json({ message: "Successfully deleted", response });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

module.exports = deleteProduct;
