const Products = require('../models/Products')

// function for displaying all the products
const showProducts = async(req,res) =>{
    try {
        const data = await Products.find();
        return res.status(200).json({products: data})
    } catch (err) {
        return res.status(500).json({message: err})
    }
}

module.exports = showProducts;