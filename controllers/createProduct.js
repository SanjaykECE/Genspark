const Products = require("../models/Products");

const createProduct = async (req, res) => {
  try {
    const { productName, description, price, stock, category } = req.body;
    if (!productName || !price || !stock || !category || !description) {
      return res.status(400).json({ message: "All feilds are mandatory." });
    }
    const alreadyPresent = await Products.findOne({ productName });
    if (alreadyPresent) {
      return res.status(400).json({ message: "Product already present" });
    }

    const result = await Products.create({
      price,
      productName,
      description,
      stock,
      category,
    });
    res.status(201).json({ message: "Successfully created", result });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

module.exports = createProduct;
