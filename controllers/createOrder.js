const Orders = require("../models/Orders");
const Products = require("../models/Products");

const createOrder = async (req, res) => {
  try {
    const { products } = req.body;
    if (products.length === 0) {
      return res.status(400).json({ message: "No product info provided" });
    }

    let amount = 0;

    for (let product of products) {
      const p = await Products.findById(product.productId);
      amount += p.price * product.quantity;
    }
    const result = await Orders.create({
      orderedBy: req.user,
      products,
      amount,
    });
    res.status(201).json({ message: "Successfully created", result });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

module.exports = createOrder;
