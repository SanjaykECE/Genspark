const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Products',
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },
})

// database schema for orders
const orderSchema = new mongoose.Schema({
    orderedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required:true,
    },
    products: {
        type: [ProductSchema],
    },
    amount:{
        type:String,
        required:true,
    },
    deliveryStatus:{
        type:Boolean,
        default:false,
    }
},{timestamps:true})

module.exports = mongoose.model('Order', orderSchema);