const mongoose = require('mongoose');

// database schema for products
const productSchema = new mongoose.Schema({
    productName:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
    price:{
        type:Number,
        required:true,
    },
    stock:{
        type:Number,
    },
    category:{
        type:String,
        required:true,
    },
}, {
    strict: true
})

module.exports = mongoose.model('Product', productSchema);