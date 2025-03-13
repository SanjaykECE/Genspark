const Products = require('../models/Products')

// function for filtering products by minPrice, maxPrice and category
const filterProducts = async(req,res) =>{
    try {
        const {min = null, max = null, category = null} = req.query;
        const query = {}
        if(min){
            query["price"] = { 
                $gte: min
            }
        }
        if(max){
            query["price"] = {
                ...query["price"],
                $lte: max
            }
        }
        if(category){
            query["category"] = category
        }
        const data = await Products.find(query);
        return res.json({ data })
        
    } catch (err) {
        return res.status(500).json({message: err})
    }
}

module.exports = filterProducts;