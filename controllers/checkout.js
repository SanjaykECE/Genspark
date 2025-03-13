const Products = require("../models/Products");
const Orders = require("../models/Orders");
const mongoose = require("mongoose");

// checkout/order function
const checkout = async (req, res) => {
  try {
    const { products } = req.body;
    let totalprice = 0;
    for (let product of products) {
      const order = await Products.findOne({ _id: product.productId }).select({
        price: 1,
        stock: 1,
        productName: 1,
      });
      if (!order) {
        return res.status(400).json({ message: "product does not exists" });
      }
      if (order.stock >= product.quantity) {
        totalprice += Number(order.price) * product.quantity;
        order.stock -= product.quantity;
      } else {
        return res
          .status(400)
          .json({ message: order.productName + " Is Out Of Stock" });
      }
      await order.save();
    }
    const userId = new mongoose.Types.ObjectId(req.user);
    await Orders.create({
      amount: totalprice,
      products,
      orderedBy: userId,
      deliveryStatus: true,
    });
    return res
      .status(200)
      .json({ productsOrdered: products, totalPrice: totalprice });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

module.exports = checkout;
