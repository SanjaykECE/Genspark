const Order = require('../models/Orders')

const getAllOrder = async(req,res) => {
    try {
        const orders = await Order.find();
        return res.status(200).json(orders);
    } catch (err) {
        return res.status(500).json({message: err})
    }
}

module.exports = getAllOrder