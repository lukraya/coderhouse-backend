const { Schema } = require('mongoose')

const cartSchema = new Schema({
    timestamp: String,
    quantity: Number,
    subtotal: Number,
    product: {
        _id: String,
        name: String,
        price: Number,
        thumbnail: String,
        stock: Number,
        description: String,
        code: String,
        category: String,
        timestamp: String
    }
})

module.exports = cartSchema