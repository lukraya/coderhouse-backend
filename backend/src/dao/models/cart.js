const {Schema, model} = require('mongoose')

const cartSchema = new Schema({
    timestamp: String,
    product: {
        name: String,
        price: Number,
        thumbnail: String,
        stock: Number,
        description: String,
        code: String,
        category: String,
        timestamp: String
    }
}, {collection: 'carrito'})

module.exports = model('Cart', cartSchema)