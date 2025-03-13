const Products = require("../models/Products");

const updateProduct = async (req, res) => {
  try {
    const { productName, ...fields } = req.body;
    if (!productName || Object.keys(fields).length === 0) {
      return res
        .status(400)
        .json({ message: "Update parameters are required" });
    }
    const response = await Products.findOneAndUpdate(
      { productName },
      { $set: fields },
      { new: true }
    );
    res.status(201).json({ message: "Successfully created", response });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

module.exports = updateProduct;
