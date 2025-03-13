const Products = require('../models/Products')

// function for searching products by name
const searchProducts = async(req,res) =>{
    try {
        const { name } = req.params;
        const regex = new RegExp(name, 'i');
        const data = await Products.find({ productName: { $regex: regex } });
        return res.status(200).json({products: data})
    } catch (err) {
        return res.status(500).json({message: err})
    }
}

module.exports = searchProducts;